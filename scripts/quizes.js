const quizzes = [
  {
    id: 1,
    title: "Math Quiz",
    description: "Test your math skills!",
    questions: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        correct: 1
      },
      {
        question: "What is 10 / 2?",
        options: ["2", "5", "10"],
        correct: 1
      },
      {
        question: "What is 5 x 3?",
        options: ["15", "10", "20"],
        correct: 0
      }
    ]
  },
  {
    id: 2,
    title: "Science Quiz",
    description: "Explore basic science.",
    questions: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter"],
        correct: 1
      },
      {
        question: "What gas do we breathe in?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide"],
        correct: 0
      },
      {
        question: "What is H2O?",
        options: ["Salt", "Water", "Sugar"],
        correct: 1
      }
    ]
  },
  {
    id: 3,
    title: "Geography Quiz",
    description: "Explore the world!",
    questions: [
      { question: "What is the capital of France?", options: ["Madrid", "Berlin", "Paris"], correct: 2 },
      { question: "Which continent is Egypt in?", options: ["Asia", "Africa", "Europe"], correct: 1 },
      { question: "Mount Everest is located in which country?", options: ["India", "China", "Nepal"], correct: 2 }
    ]
  },
  {
    id: 4,
    title: "History Quiz",
    description: "Test your history knowledge.",
    questions: [
      { question: "Who discovered America?", options: ["Christopher Columbus", "Isaac Newton", "Einstein"], correct: 0 },
      { question: "In which year did WW2 end?", options: ["1945", "1939", "1918"], correct: 0 },
      { question: "What wall fell in 1989?", options: ["China Wall", "Berlin Wall", "Hadrian’s Wall"], correct: 1 }
    ]
  },
  {
    id: 5,
    title: "Literature Quiz",
    description: "Famous books and authors.",
    questions: [
      { question: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Hemingway", "Dickens"], correct: 0 },
      { question: "What is the main character’s name in '1984'?", options: ["Winston Smith", "Holden Caulfield", "Jay Gatsby"], correct: 0 },
      { question: "Which book starts with 'Call me Ishmael'?", options: ["Moby-Dick", "The Great Gatsby", "Dracula"], correct: 0 }
    ]
  }
];

localStorage.setItem("quizzes", JSON.stringify(quizzes));