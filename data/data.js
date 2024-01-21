import uuid from 'react-native-uuid';


export const data = [
    {
        id: uuid.v4(),
        name: "Harry Potter",
        image: require("../assets/categoryOne.png"),
        questions: [
            {
                questionId: uuid.v4(),
                question: "Who is the Half-Blood Prince in the Harry Potter series?",
                options: [
                    { optionId: uuid.v4(), option: "A. Draco Malfoy", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Severus Snape", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "C. Tom Riddle", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Sirius Black", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the name of the magical creature that serves as the Hogwarts gamekeeper?",
                options: [
                    { optionId: uuid.v4(), option: "A. Buckbeak", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Dobby", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Aragog", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Hagrid's Blast-Ended Skrewt", isOptionCorrect: true },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "Which house did the Sorting Hat originally belong to?",
                options: [
                    { optionId: uuid.v4(), option: "A. Gryffindor", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Ravenclaw", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Hufflepuff", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Slytherin", isOptionCorrect: true },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What type of dragon did Harry face in the Triwizard Tournament's first task?",
                options: [
                    { optionId: uuid.v4(), option: "A. Hungarian Horntail", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "B. Swedish Short-Snout", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Chinese Fireball", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Ukrainian Ironbelly", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "Which magical object allows Harry to view memories and experiences of others?",
                options: [
                    { optionId: uuid.v4(), option: "A. The Marauder's Map", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. The Pensieve", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "C. The Time-Turner", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. The Invisibility Cloak", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What position does Harry play in Quidditch?",
                options: [
                    { optionId: uuid.v4(), option: "A. Keeper", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Seeker", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "C. Chaser", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Beater", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the name of the spell used to summon objects towards the caster?",
                options: [
                    { optionId: uuid.v4(), option: "A. Expelliarmus", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Accio", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "C. Lumos", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Petrificus Totalus", isOptionCorrect: false },
                ],
            },
        ]
    },
    {
        id: 2,
        name: "Iron Man",
        image: require("../assets/categoryTwo.png"),
        questions: [
            {
                questionId: uuid.v4(),
                question: "What is the name of Tony Stark's superhero alter ego in the Marvel Cinematic Universe?",
                options: [
                    { optionId: uuid.v4(), option: "A. Captain America", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Iron Patriot", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Black Widow", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Iron Man", isOptionCorrect: true },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What element is discovered by Tony Stark and later used to power his arc reactor?",
                options: [
                    { optionId: uuid.v4(), option: "A. Vibranium", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Palladium", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "C. Adamantium", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Unobtainium", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "Who is Tony Stark's loyal AI assistant that helps him in various Iron Man suits?",
                options: [
                    { optionId: uuid.v4(), option: "A. J.A.R.V.I.S.", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "B. FRIDAY", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Ultron", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Dummy", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the name of the company founded by Tony Stark's father?",
                options: [
                    { optionId: uuid.v4(), option: "A. Stark Industries", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "B. Wayne Enterprises", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Oscorp", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Pym Technologies", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "Which actor portrays Tony Stark/Iron Man in the Marvel Cinematic Universe?",
                options: [
                    { optionId: uuid.v4(), option: "A. Chris Evans", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Chris Hemsworth", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Robert Downey Jr.", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "D. Mark Ruffalo", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the name of the artificial intelligence system that becomes a major antagonist in Iron Man 3?",
                options: [
                    { optionId: uuid.v4(), option: "A. Ultron", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. H.E.R.B.I.E.", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. VISION", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Extremis", isOptionCorrect: true },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the name of Tony Stark's loyal bodyguard and friend?",
                options: [
                    { optionId: uuid.v4(), option: "A. James Rhodes", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "B. Happy Hogan", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Sam Wilson", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Nick Fury", isOptionCorrect: false },
                ],
            },
        ]
    },
    {
        id: 3,
        name: "Spider-Man",
        image: require("../assets/categoryThree.png"),
        questions: [
            {
                questionId: uuid.v4(),
                question: "What is the real name of Spider-Man in the Marvel Universe?",
                options: [
                    { optionId: uuid.v4(), option: "A. Eddie Brock", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Miles Morales", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Peter Parker", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "D. Gwen Stacy", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the name of the newspaper where Peter Parker works as a photographer?",
                options: [
                    { optionId: uuid.v4(), option: "A. Daily Bugle", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "B. Daily Planet", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. The Daily Globe", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. The Front Page", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the name of Spider-Man's first villain in the comics?",
                options: [
                    { optionId: uuid.v4(), option: "A. Green Goblin", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Doctor Octopus", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Vulture", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. The Chameleon", isOptionCorrect: true },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "Which of Spider-Man's villains was once his best friend, Harry Osborn?",
                options: [
                    { optionId: uuid.v4(), option: "A. Venom", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Green Goblin", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "C. Sandman", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Rhino", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the source of Spider-Man's superpowers?",
                options: [
                    { optionId: uuid.v4(), option: "A. Gamma radiation", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Genetic mutation", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Radioactive spider bite", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "D. Alien symbiote", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "Which actress played Mary Jane Watson in Sam Raimi's Spider-Man trilogy?",
                options: [
                    { optionId: uuid.v4(), option: "A. Kirsten Dunst", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "B. Emma Stone", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Zendaya", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Bryce Dallas Howard", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the name of the parallel universe version of Spider-Man, portrayed as an animated character in the film 'Spider-Man: Into the Spider-Verse'?",
                options: [
                    { optionId: uuid.v4(), option: "A. Peter Parker", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Ben Reilly", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Miles Morales", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "D. Miguel O'Hara", isOptionCorrect: false },
                ],
            },
        ]
    },
    {
        id: 4,
        name: "Batman",
        image: require("../assets/categoryFour.png"),
        questions: [
            {
                questionId: uuid.v4(),
                question: "What is Batman's real name?",
                options: [
                    { optionId: uuid.v4(), option: "A. Clark Kent", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Bruce Wayne", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "C. Tony Stark", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Peter Parker", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the name of Batman's loyal butler?",
                options: [
                    { optionId: uuid.v4(), option: "A. Alfred Pennyworth", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "B. Jarvis", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Jeeves", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Lucius Fox", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "Which villain is known as the 'Clown Prince of Crime' and is Batman's arch-enemy?",
                options: [
                    { optionId: uuid.v4(), option: "A. The Riddler", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Two-Face", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. The Penguin", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. The Joker", isOptionCorrect: true },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the name of Batman's crime-fighting partner who is often referred to as the 'Boy Wonder'?",
                options: [
                    { optionId: uuid.v4(), option: "A. Nightwing", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Red Hood", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Robin", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "D. Batgirl", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the name of Batman's high-tech crime-fighting vehicle?",
                options: [
                    { optionId: uuid.v4(), option: "A. Batcycle", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Batmobile", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "C. Batwing", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Batboat", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "Who is the CEO of Wayne Enterprises and provides Batman with various gadgets and technology?",
                options: [
                    { optionId: uuid.v4(), option: "A. Lucius Fox", isOptionCorrect: true },
                    { optionId: uuid.v4(), option: "B. Harvey Dent", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Commissioner Gordon", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Ra's al Ghul", isOptionCorrect: false },
                ],
            },
            {
                questionId: uuid.v4(),
                question: "What is the name of the martial art that Batman is trained in?",
                options: [
                    { optionId: uuid.v4(), option: "A. Judo", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "B. Kung Fu", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "C. Krav Maga", isOptionCorrect: false },
                    { optionId: uuid.v4(), option: "D. Ninjitsu", isOptionCorrect: true },
                ],
            },
        ]
    },
];