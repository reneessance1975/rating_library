// Definir as perguntas e respostas
const questions = [
    {
        question: "Qual é a capital de Portugal?",
        options: ["Lisboa", "Porto", "Coimbra", "Funchal"],
        answer: "Lisboa"
    },
    {
        question: "Qual é a cor do céu durante o dia?",
        options: ["Azul", "Verde", "Amarelo", "Preto"],
        answer: "Azul"
    },
    {
        question: "Quanto é 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestionIndex = 0; // Índice da pergunta atual
let score = 0; // Pontuação do usuário

// Função para começar o quiz
function startQuiz() {
    document.getElementById('start-button').style.display = 'none'; // Esconde o botão de iniciar

    // Exibe a primeira pergunta
    showQuestion();
}

// Função para mostrar uma pergunta
function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = `
            <h2>${question.question}</h2>
            <div>
                ${question.options.map(option => `
                    <button class="option-button">${option}</button>
                `).join('')}
            </div>
        `;

        // Adicionar evento de clique nas opções
        const optionButtons = document.querySelectorAll('.option-button');
        optionButtons.forEach(button => {
            button.addEventListener('click', checkAnswer);
        });
    } else {
        showResults(); // Mostrar resultado final quando todas as perguntas forem respondidas
    }
}

// Função para verificar a resposta
function checkAnswer(event) {
    const selectedAnswer = event.target.innerText;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++; // Passa para a próxima pergunta
    showQuestion(); // Exibe a próxima pergunta
}

// Função para mostrar o resultado final
function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>Você terminou o quiz!</h2>
        <p>Sua pontuação é: ${score} de ${questions.length}</p>
    `;
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Reiniciar';
    restartButton.addEventListener('click', restartQuiz);
    quizContainer.appendChild(restartButton);
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('start-button').style.display = 'inline-block';
    document.getElementById('quiz-container').innerHTML = '';
}
    
// Iniciar o quiz quando o botão for clicado
document.getElementById('start-button').addEventListener('click', startQuiz);
