import React from 'react';

function CategorySelection({ onSelectCategory }) {
    const categories = [
        "Cultura general",
        "Deporte",
        "Historia",
        "Geografía",
        "Entretenimiento",
        "Retos"
    ];

    return (
        <div>
            <h2>Selecciona una categoría:</h2>
            {categories.map((category, index) => (
                <button key={index} onClick={() => onSelectCategory(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategorySelection;
