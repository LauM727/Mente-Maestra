import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Questions from '../../components/questions/questions';
import CategorySelection from '../../components/category/category';
import "./game.css"

function Game() {
    const location = useLocation();
    const participants = location.state?.participants || [];

    if (participants.length === 0) {
        return <h1>Error: No se encontraron participantes.</h1>;
    }

    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [scores, setScores] = useState(Array(participants.length).fill(0));
    const [categorySelected, setCategorySelected] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(30);
    const [questionPoints, setQuestionPoints] = useState(10);

    const maxTime = 30;

    const handleCategorySelection = (category) => {
        setCategorySelected(category);
        setTimeRemaining(30);


        const randomPoints = Math.floor(Math.random() * 16) + 5;
        setQuestionPoints(randomPoints);
    };

    const handleAnswer = (answer) => {
        let newScores = [...scores];

        if (answer.toLowerCase() === "correcto") {
            newScores[currentPlayerIndex] += questionPoints;
        } else {
            newScores[currentPlayerIndex] -= questionPoints / 2;
        }

        if (newScores[currentPlayerIndex] >= 50) {
            setGameOver(true);
        } else {
            setScores(newScores);
            setCategorySelected(null);
            setCurrentPlayerIndex((currentPlayerIndex + 1) % participants.length);
            setTimeRemaining(30);
        }
    };


    useEffect(() => {
        if (!categorySelected) return;

        if (timeRemaining > 0) {
            const timerId = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            handleAnswer('incorrecto');
        }
    }, [timeRemaining, categorySelected]);

    if (gameOver) {
        return <h1>¡{participants[currentPlayerIndex]} ha ganado el juego!</h1>;
    }

    const timeProgress = (timeRemaining / maxTime) * 100;

    return (
        <div>
            <h1>Turno de {participants[currentPlayerIndex]}</h1>
            {!categorySelected ? (
                <CategorySelection onSelectCategory={handleCategorySelection} />
            ) : (
                <div>
                      <div className="points-display">
                        <h3>{questionPoints} puntos</h3>
                    </div>
                    <div className="timer-container">
                        <div className="progress-bar">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${timeProgress}%` }}
                            />
                        </div>
                        <div className="timer-text">
                            <span role="img" aria-label="timer">⏱️</span> {`00:${timeRemaining < 10 ? `0${timeRemaining}` : timeRemaining}`}
                        </div>
                    </div>
                    <Questions category={categorySelected} onAnswer={handleAnswer} />

                </div>
            )}
            <div>
                <h2>Puntajes</h2>
                <ul>
                    {participants.map((participant, index) => (
                        <li key={index}>{participant}: {scores[index]} puntos</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Game;
