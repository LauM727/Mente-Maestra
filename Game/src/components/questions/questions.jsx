import React, { useState, useEffect } from 'react';
import questionsData from '../../data/data';

function Questions({ category, question: propQuestion, onAnswer }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [question, setQuestion] = useState(propQuestion);

    useEffect(() => {
        if (propQuestion) {
            setQuestion(propQuestion);
        } else if (category && questionsData[category] && questionsData[category].length > 0) {
            const categoryQuestions = questionsData[category];
            const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
            setQuestion(randomQuestion);
        } else {
            console.error(`No hay preguntas disponibles para la categoría ${category}`);
        }
    }, [category, propQuestion]);

    const handleOptionChange = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleSubmit = () => {
        if (selectedAnswer) {
            onAnswer(selectedAnswer);
        }
    };
    

    if (!question || !question.options) return <div>Cargando pregunta...</div>;

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
