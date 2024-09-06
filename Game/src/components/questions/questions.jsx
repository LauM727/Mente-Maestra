import React, { useState, useEffect } from 'react';
import questionsData from '../../data/data';

function Questions({ category, onAnswer }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        if (questionsData[category]) {

            const categoryQuestions = questionsData[category];


            const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
            setQuestion(randomQuestion);
        }
    }, [category]);

    const handleOptionChange = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleSubmit = () => {
        if (selectedAnswer) {
            if (selectedAnswer === question.correctAnswer) {
                onAnswer("correcto");
            } else {
                onAnswer("incorrecto");
            }
        }
    };

    if (!question) return <div>Cargando pregunta...</div>;

    return (
        <div>
            <h2>{question.questionText}</h2>
            <form>
                {question.options.map((option, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={`option-${index}`}
                            name="question"
                            value={option}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                ))}
            </form>
            <button onClick={handleSubmit} disabled={!selectedAnswer}>
                Enviar Respuesta
            </button>
        </div>
    );
}

export default Questions;
