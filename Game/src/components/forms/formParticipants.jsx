import React, { useState } from 'react';

const FormParticipants = ({ onSubmit }) => {
  const [participants, setParticipants] = useState('');

  const handleChange = (e) => {
    setParticipants(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (participants && !isNaN(participants)) {
      onSubmit(Number(participants)); // Llama a la función de callback con la cantidad de participantes
      setParticipants(''); // Limpiar el campo de entrada después del envío
    } else {
      alert('Por favor ingrese un número válido.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="participants">Cantidad de participantes:</label>
      <input
        type="text"
        id="participants"
        value={participants}
        onChange={handleChange}
        placeholder="Ingrese un número"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormParticipants;
