const questionsData = {
    "Cultura general": [
        {
            questionText: "¿Cuál es el país más grande del mundo?",
            options: ["Canadá", "Rusia", "China", "Estados Unidos"],
            correctAnswer: "Rusia"
        },
        {
            questionText: "¿En qué año llegó el hombre a la luna?",
            options: ["1965", "1969", "1972", "1968"],
            correctAnswer: "1969"
        },
        {
            questionText: "¿Quién escribió 'Cien años de soledad'?",
            options: ["Gabriel García Márquez", "Julio Cortázar", "Mario Vargas Llosa", "Pablo Neruda"],
            correctAnswer: "Gabriel García Márquez"
        },
        {
            questionText: "¿Cuál es el idioma más hablado en el mundo?",
            options: ["Inglés", "Mandarín", "Español", "Hindú"],
            correctAnswer: "Mandarín"
        },
        {
            questionText: "¿Quién pintó 'La Última Cena'?",
            options: ["Leonardo da Vinci", "Van Gogh", "Pablo Picasso", "Claude Monet"],
            correctAnswer: "Leonardo da Vinci"
        },
        {
            questionText: "¿Quién es el autor de 'Don Quijote de la Mancha'?",
            options: ["Jorge Luis Borges", "Isabel Allende", "Miguel de Cervantes Saavedra", "Gabriel García Márquez"],
            correctAnswer: "Miguel de Cervantes Saavedra"
        },
        {
            questionText: "¿Quién sabía que no sabia nada?",
            options: ["Aristóteles", "Sócrates", "Platón", "Descartes"],
            correctAnswer: "Sócrates"
        },
        {
            questionText: "¿En qué año se lanzó el primer iPhone?",
            options: ["2004", "2009", "2002", "2007"],
            correctAnswer: "2007"
        },
        {
            questionText: "¿Qué filósofo griego fue maestro de Alejandro Magno?",
            options: ["Sócrates", "Aristóteles", "Descartes", "Platón"],
            correctAnswer: "Aristóteles"
        }
    ],
    "Deporte": [
        {
            questionText: "¿Quién ha ganado más Copas del Mundo de fútbol?",
            options: ["Brasil", "Alemania", "Argentina", "Italia"],
            correctAnswer: "Brasil"
        },
        {
            questionText: "¿Cuántos jugadores tiene un equipo de baloncesto en cancha?",
            options: ["5", "6", "7", "8"],
            correctAnswer: "5"
        },
        {
            questionText: "¿En qué deporte se destaca Usain Bolt?",
            options: ["Natación", "Fútbol", "Atletismo", "Baloncesto"],
            correctAnswer: "Atletismo"
        },
        {
            questionText: "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?",
            options: ["1896", "1900", "1912", "1924"],
            correctAnswer: "1896"
        },
        {
            questionText: "¿Cómo se llama la posición del jugador con uniforme de color diferente en voleibol?",
            options: ["Armador", "Libero", "Auxiliar", "Central"],
            correctAnswer: "Libero"
        },
        {
            questionText: "¿Qué país ha ganado más medallas en los Juegos Olímpicos?",
            options: ["Japón", "China", "Rusia", "Estados Unidos"],
            correctAnswer: "Estados Unidos"
        },
        {
            questionText: "¿Qué jugador de baloncesto es conocido como 'Su Majestad'?",
            options: ["Stephen Curry", "Lebron James", "Michael Jordan", "Kevin Durant"],
            correctAnswer: "Michael Jordan"
        },
        {
            questionText: "¿Qué selección ganó la primera Copa Mundial de la FIFA en 1930?",
            options: ["Uruguay", "Argentina", "Brasil", "Chile"],
            correctAnswer: "Uruguay"
        },
        {
            questionText: "¿Cuál es el deporte que se practica con una pelota y una raqueta en una cancha dividida por una red?",
            options: ["Badminton", "Ping Pong", "Voleibol", "Tenis"],
            correctAnswer: "Tenis"
        }

    ],
    "Historia": [
        {
            questionText: "¿Quién fue el primer presidente de los Estados Unidos?",
            options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
            correctAnswer: "George Washington"
        },
        {
            questionText: "¿En qué año cayó el Muro de Berlín?",
            options: ["1985", "1989", "1991", "1993"],
            correctAnswer: "1989"
        },
        {
            questionText: "¿Quién fue el líder de la Revolución Cubana?",
            options: ["Ernesto 'Che' Guevara", "Fidel Castro", "Camilo Cienfuegos", "Raúl Castro"],
            correctAnswer: "Fidel Castro"
        },
        {
            questionText: "¿Qué evento desencadenó la Primera Guerra Mundial?",
            options: ["El hundimiento del Titanic", "El asesinato del archiduque Francisco Fernando", "La Revolución Rusa", "La invasión de Polonia"],
            correctAnswer: "El asesinato del archiduque Francisco Fernando"
        },
        {
            questionText: "¿En qué conflicto bélico se utilizó por primera vez el tanque?",
            options: ["Primera Guerra Mundial", "Segunda Guerra Mundial", "Guerra Fría", "Guerra de Vietnam"],
            correctAnswer: "Primera Guerra Mundial"
        },
        {
            questionText: "¿Qué tratado puso fin a la Primera Guerra Mundial?",
            options: ["Tratado de Tordesillas", "Tratado de Utrecht", "Tratado de Versalles", "Tratado de Ginebra"],
            correctAnswer: "Tratado de Versalles"
        },
        {
            questionText: "¿Quién fue el presidente de los Estados Unidos durante la Guerra Civil?",
            options: ["Thomas Jefferson", "George Washington", "John Adams", "Abraham Lincoln"],
            correctAnswer: "Abraham Lincoln"
        },
        {
            questionText: "¿En qué año llegó Cristóbal Colón a América?",
            options: ["1492", "1490", "1500", "1485"],
            correctAnswer: "1492"
        },
        {
            questionText: "¿Qué país fue el primero en enviar un satélite artificial al espacio?",
            options: ["Unión Sovietica", "Japón", "Estados Unidos", "Francia"],
            correctAnswer: "Unión Sovietica"
        },
    ],
    "Geografía": [
        {
            questionText: "¿Cuál es el río más largo del mundo?",
            options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
            correctAnswer: "Amazonas"
        },
        {
            questionText: "¿En qué continente se encuentra el desierto del Sahara?",
            options: ["Asia", "América", "África", "Oceanía"],
            correctAnswer: "África"
        },
        {
            questionText: "¿Cuál es la capital de Australia?",
            options: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
            correctAnswer: "Canberra"
        },
        {
            questionText: "¿Cuál es el país más pequeño del mundo?",
            options: ["Mónaco", "Nauru", "Ciudad del Vaticano", "San Marino"],
            correctAnswer: "Ciudad del Vaticano"
        },
        {
            questionText: "¿En qué continente se encuentra el río Nilo?",
            options: ["Europa", "África", "Asia", "Oceanía"],
            correctAnswer: "África"
        },
        {
            questionText: "¿Cuál es el desierto más grande del mundo?",
            options: ["Antártico", "Kalahari", "Sahara", "Gobi"],
            correctAnswer: "Antártico"
        },
        {
            questionText: "¿Cuál es la capital de Canada?",
            options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            correctAnswer: "Ottawa"
        },
        {
            questionText: "¿Qué país tiene la forma de una bota en el mapa?",
            options: ["España", "Italia", "Chile", "Grecia"],
            correctAnswer: "Italia"
        },
        {
            questionText: "¿Cómo se llama el lugar del océano más alejado de cualquier tierra firme?",
            options: ["Punto de Greenwich", "Fosa de las Marianas", "Punto Nemo", "Punto de la Antártida"],
            correctAnswer: "Punto Nemo"
        },
        {
            questionText: "¿Cuál es el único continente sin desierto?",
            options: ["América", "Asia", "Oceanía", "Europa"],
            correctAnswer: "Europa"
        },
        {
            questionText: "¿Cuál es el único continente sin desierto?",
            options: ["América", "Asia", "Oceanía", "Europa"],
            correctAnswer: "Europa"
        }
        
    ],
    "Entretenimiento": [
        {
            questionText: "¿Quién es el director de la película 'Titanic'?",
            options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Ridley Scott"],
            correctAnswer: "James Cameron"
        },
        {
            questionText: "¿En qué serie aparece el personaje Walter White?",
            options: ["Breaking Bad", "Better Call Saul", "Los Soprano", "Juego de Tronos"],
            correctAnswer: "Breaking Bad"
        },
        {
            questionText: "¿Quién interpretó a Jack Sparrow en 'Piratas del Caribe'?",
            options: ["Orlando Bloom", "Johnny Depp", "Keanu Reeves", "Brad Pitt"],
            correctAnswer: "Johnny Depp"
        },
        {
            questionText: "¿Qué banda lanzó el álbum 'Abbey Road'?",
            options: ["The Beatles", "The Rolling Stones", "Pink Floyd", "Queen"],
            correctAnswer: "The Beatles"
        },
        {
            questionText: "¿Cuál es el nombre del villano en la película 'El silencio de los inocentes'?",
            options: ["Norman Bates", "Michael Myers", "Hannibal Lecter", "Freddy Krueger"],
            correctAnswer: "Hannibal Lecter"
        },
        {
            questionText: "¿Quién interpretó a Jack Dawson en la película 'Titanic'?",
            options: ["Brad Pitt", "Leonardo DiCaprio", "Matthew McConaughey", "Tom Cruise"],
            correctAnswer: "Leonardo DiCaprio"
        },
        {
            questionText: "¿Qué director de cine es conocido por películas como 'Pulp Fiction' y 'Reservoir Dogs'?",
            options: ["Steven Spielberg", "Martin Scorsese", "Alfred Hitchcock", "Quentin Tarantino"],
            correctAnswer: "Quentin Tarantino"
        },
        {
            questionText: "¿Qué actor ha interpretado a James Bond más veces en el cine?",
            options: ["Roger Moore", "Sean Connery", "Daniel Craig", "Pierce Brosnan"],
            correctAnswer: "Roger Moore"
        },
        {
            questionText: "¿Cuál fue la primera película de Disney?",
            options: ["La Cenicienta", "Blanca Nieves", "La Sirenita", "La Bella y La Bestia"],
            correctAnswer: "Blanca Nieves"
        },
        {
            questionText: "¿Quién dijo esta frase? 'El pasado puede doler. Pero según lo veo puedes o huir de él o aprender'",
            options: ["Timón", "Mufasa", "Pumba", "Rafiki"],
            correctAnswer: "Rafiki"
        },
    ],
    "Retos": [
        {
            questionText: "Todos hagan 10 flexiones de brazos.",
            options: ["Lo logramos", "No logramos"],
            correctAnswer: "Lo logramos"
        },
        {
            questionText: "Digan los nombres de cinco ciudades que empiecen con la letra B en menos de 30 segundos.",
            options: ["Lo logramos", "No logramos"],
            correctAnswer: "Lo logramos"
        },
        {
            questionText: "Digan el abecedario al revés sin equivocarse.",
            options: ["Lo logramos", "No logramos"],
            correctAnswer: "Lo logramos"
        },
        {
            questionText: "Imiten a un animal durante 30 segundos.",
            options: ["Lo logramos", "No logramos"],
            correctAnswer: "Lo logramos"
        },
        {
            questionText: "Bailen sin música durante 20 segundos.",
            options: ["Lo logramos", "No logramos"],
            correctAnswer: "Lo logramos"
        },
        {
            questionText:"Todos los miembros del grupo deben formar una pirámide humana en 30 segundos.",
            options: ["Lo logramos", "No logramos"],
            correctAnswer: "Lo logramos"
        },
        {
            questionText:"El grupo debe organizarse en orden de estatura, de menor a mayor, en 30 segundos.",
            options: ["Lo logramos", "No logramos"],
            correctAnswer: "Lo logramos"
        },
        {
            questionText:"Un miembro describe un objeto sin decir su nombre y los demás deben adivinarlo en 30 segundos.",
            options: ["Lo logramos", "No logramos"],
            correctAnswer: "Lo logramos"
        },
    ]
};

export default questionsData;
