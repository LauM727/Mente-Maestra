import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import FormParticipants from '../../components/forms/formParticipants';

function AddParticipants() {
    const navigate = useNavigate();
    const [numParticipants, setNumParticipants] = useState(null);

    const handleParticipantsSubmit = (number) => {
        setNumParticipants(number);
        navigate('/addNames', { state: { numParticipants: number } });
    };

    return (
        <div className="add-person">
            <img className="logo" src={Logo} alt="Logo" />
            <h1>Ingresa el número de participantes</h1>
            <FormParticipants onSubmit={handleParticipantsSubmit} />
        </div>
    );
}

export default AddParticipants;
