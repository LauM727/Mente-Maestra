import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Questions from '../../components/questions/questions';
import CategorySelection from '../../components/category/category';

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

    const handleCategorySelection = (category) => {
        setCategorySelected(category);
    };

    const handleAnswer = (answer) => {
        const points = 10;
        let newScores = [...scores];

        if (answer.toLowerCase() === "correcto") {
            newScores[currentPlayerIndex] += points;
        } else {
            newScores[currentPlayerIndex] -= points / 2;
        }

        if (newScores[currentPlayerIndex] >= 50) {
            setGameOver(true);
        } else {
            setScores(newScores);
            setCategorySelected(null);
            setCurrentPlayerIndex((currentPlayerIndex + 1) % participants.length);
        }
    };

    if (gameOver) {
        return <h1>¡{participants[currentPlayerIndex]} ha ganado el juego!</h1>;
    }

    return (
        <div>
            <h1>Turno de {participants[currentPlayerIndex]}</h1>
            {!categorySelected ? (
                <CategorySelection onSelectCategory={handleCategorySelection} />
            ) : (
                <Questions category={categorySelected} onAnswer={handleAnswer} />
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
