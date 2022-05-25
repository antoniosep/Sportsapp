var defaultThreads = [
    {
        id: 1,
        title: "Partido Sabado Malaga",
        author: "Aaron",
        date: Date.now(),
        content: "Estamos buscando 2 personas para un partido de futbol el sabado a las 11 am en el campo de futbol del Rincon de la Victoria",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Yo puedo ir soy portero"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Contad conmigo"
            }
        ]
    },
    {
        id: 2,
        title: "Dificultad de los retos de la semana",
        author: "Aaron",
        date: Date.now(),
        content: "Abro este hilo para debatir sobre la dificultad que deberían tener los retos de la semana",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "En mi opinion deberían ser asequibles para cualquier nivel"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Yo creo que tienen que ser desafiantes, para eso es un RETO"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}