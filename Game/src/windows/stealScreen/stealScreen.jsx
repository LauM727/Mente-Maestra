import React, { useState } from 'react';

function StealScreen({ participants, onStealAttempt }) {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const handleSubmit = () => {
        if (selectedPlayer === 'Ninguno') {
            onStealAttempt(null, false); // Si nadie roba, pasa al siguiente turno
        } else {
            onStealAttempt(participants.indexOf(selectedPlayer), true); // Simulando una respuesta correcta para demostración
        }
    };

    return (
        <div className="steal-screen">
            <h2>¿Quién quiere robar los puntos?</h2>
            <p>Recuerda: si respondes mal, se restará la misma cantidad de puntos a tu total.</p>
            <div className="steal-options">
                {participants.map((player, index) => (
                    <button key={index} onClick={() => setSelectedPlayer(player)}>
                        {player}
                    </button>
                ))}
                <button className="none-option" onClick={() => setSelectedPlayer('Ninguno')}>
                    Ninguno
                </button>
            </div>
            <button onClick={handleSubmit} disabled={!selectedPlayer}>
                Confirmar
            </button>
        </div>
    );
}

export default StealScreen;
