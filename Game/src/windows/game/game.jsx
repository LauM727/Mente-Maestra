import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Questions from '../../components/questions/questions';
import CategorySelection from '../../components/category/category';
import TimerBar from '../../components/timeBar/timeBar';

function Game() {
    const location = useLocation();
    const { participants } = location.state || {};

    if (!participants || participants.length === 0) {
        return <h1>Error: No se encontraron participantes.</h1>;
    }

    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [scores, setScores] = useState(Array(participants.length).fill(0));
    const [categorySelected, setCategorySelected] = useState(null);
    const [questionValue, setQuestionValue] = useState(10);
    const [gameOver, setGameOver] = useState(false);
    const [stealAttempt, setStealAttempt] = useState(false);
    const [stealPlayerIndex, setStealPlayerIndex] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(30);

    const handleCategorySelection = (category) => {
        setCategorySelected(category);
        setQuestionValue(10);


        const question = { text: "¿Cuál es la capital de Francia?", correctAnswer: "correcto" };
        setCurrentQuestion(question);

        const randomPoints = Math.floor(Math.random() * 6) + 5;
        setQuestionValue(randomPoints);
    };

    const handleAnswer = (answer) => {
        let newScores = [...scores];
        if (categorySelected === "Retos") {
            if (answer === currentQuestion.correctAnswer) {
                newScores = newScores.map(score => score + questionValue);
            } else {
                newScores = newScores.map(score => score - questionValue);
            }
        } else {
            if (answer.toLowerCase() === "correcto") {
                newScores[currentPlayerIndex] += questionValue;
            } else {
                newScores[currentPlayerIndex] -= questionValue;
                setStealAttempt(true);
                setStealPlayerIndex(currentPlayerIndex);
                return;
            }
        }

        setScores(newScores);
        setCategorySelected(null);
        setCurrentPlayerIndex((currentPlayerIndex + 1) % participants.length);
        setTimeRemaining(30);
    };

    const handleStealAnswer = (playerIndex, isCorrect) => {
        let newScores = [...scores];
        if (isCorrect) {
            newScores[playerIndex] += questionValue;
        } else {
            newScores[playerIndex] -= questionValue * 2;
        }

        setScores(newScores);
        setStealAttempt(false);
        setStealPlayerIndex(null);
        setCategorySelected(null);
        setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % participants.length);
        setTimeRemaining(30);
    };

    const handleStealAttempt = (playerIndex) => {

        setStealPlayerIndex(playerIndex);
        setStealAttempt(false);
    };

    const handleTimeUp = () => {
        handleAnswer("incorrecto");
    };

    useEffect(() => {
        if (timeRemaining > 0 && !gameOver) {
            const timer = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeRemaining === 0) {
            handleTimeUp();
        }
    }, [timeRemaining, gameOver]);

    useEffect(() => {
        if (stealAttempt) {
            setTimeRemaining(30);
        }
    }, [stealAttempt]);

    useEffect(() => {
        if (stealPlayerIndex !== null && currentQuestion) {
            setCurrentQuestion(prevQuestion => ({ ...prevQuestion }));
        }
    }, [stealPlayerIndex]);

    if (gameOver) {
        return <h1>¡{participants[currentPlayerIndex]} ha ganado el juego!</h1>;
    }

    return (
        <div className="game-screen">
            <h1>Turno de {participants[currentPlayerIndex]}</h1>

            {stealAttempt ? (
                <div className="steal-screen">
                    <h2>¿Quién quiere robar los puntos?</h2>
                    <p>Recuerda: si respondes mal, se te restará el doble de puntos.</p>
                    <ul>
                        {participants.map((player, index) => (
                            index !== currentPlayerIndex && (
                                <li key={index}>
                                    <button onClick={() => handleStealAttempt(index)}>
                                        {player}
                                    </button>
                                </li>
                            )
                        ))}
                        <li>
                            <button onClick={() => handleStealAnswer(null, false)}>
                                Ninguno
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
                <>
                    {categorySelected || stealPlayerIndex !== null ? (
                        <>
                            <TimerBar duration={30} onTimeUp={handleTimeUp} points={questionValue} />
                            <Questions
                                category={categorySelected}
                                question={currentQuestion}
                                onAnswer={stealPlayerIndex === null ? handleAnswer : (answer) => handleStealAnswer(stealPlayerIndex, answer.toLowerCase() === "correcto")}
                                questionValue={questionValue}
                            />
                        </>
                    ) : (
                        <CategorySelection onSelectCategory={handleCategorySelection} />
                    )}
                </>
            )}

            <div className="scoreboard">
                <h2>Puntajes</h2>
                {participants.map((player, index) => (
                    <div key={index}>
                        <p>{player}: {scores[index]} puntos</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Game;
