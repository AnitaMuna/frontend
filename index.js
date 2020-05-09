const startBtn = document.querySelector('#startBtn');
let startGame = document.querySelector('#startGame');
let wrapper = document.querySelector('.wrapper');
let nextBtn = document.querySelector('.next-btn');
let question = document.querySelector('#question');
let answerButton = document.getElementById('answerBtn');
let maxQuest = document.querySelector('#maxQuest');
let scoreCounter = document.querySelector('#score');
let questCount = document.querySelector('#questCount');
let choices = document.querySelectorAll('.btn');
let gameEnd = document.querySelector('.try-again');
let replayBtn = document.querySelector('#replay');
let finalResult = document.querySelector('.finalResult');

let index = 0;
scoreCounter.textContent = 0;
questCount.textContent = 1;
let score = 0;
isCorrect = false;
let rating;
let review;


startBtn.addEventListener('click', init);
nextBtn.addEventListener('click', nextQuestion);
replayBtn.addEventListener('click', restart);

function restart() {
    location.reload();
}

function init() {
    startGame.classList.add('hide');
    wrapper.classList.remove('hide');
    statsBar.classList.remove('hide');
    maxQuest.textContent = quiz.length;
    getQuiz();
}

function getQuiz() {
    question.textContent = quiz[index].question;

    choices.forEach(function (choices, i) {
        choices.textContent = quiz[index].answers[i];
        selectAnswer();
    });
}
function selectAnswer() {
    answerButton.addEventListener('click', (e) => {

        selectBtn = e.target;
        if ((selectBtn.innerText === quiz[index].correct) && (selectBtn.className === 'btn')){
            isCorrect = true;
            checkAnswer(selectBtn);
            score += 5;
            scoreCounter.textContent = score;
        }
        else {
            isCorrect = false;
            checkAnswer(selectBtn);
        }

        answerButton.style.pointerEvents = 'none';
        nextBtn.classList.remove('hide');
    });
};

function checkAnswer(obj) {
    if (isCorrect) {
        obj.classList.add('correct');
    }
    else {
        obj.classList.add('wrong');
    }
}

function nextQuestion() {
    if (index === 3) {
        nextBtn.textContent = 'View Score';
    }
    if (index === 4) {
        gameOver();
        console.log('over');
    }
    index++;
    getQuiz();
    questCount.textContent = index + 1;

    reset();
};

function gameOver() {
    wrapper.classList.add('hide');
    gameEnd.classList.remove('hide');
    nextBtn.classList.add('hide');
    statsBar.classList.add('hide');
    finalScore();
}


function reset() {
    startBtn.classList.remove('hide');
    answerButton.style.pointerEvents = 'auto';
    selectBtn.classList.remove('correct');
    selectBtn.classList.remove('wrong');
    nextBtn.classList.add('hide');
}
function finalScore() {
    switch (score) {
        case 25:
            review = document.querySelector('#review').textContent = 'Erudite!';
            rating = document.querySelector('.first').classList.remove('hide');
            finalResult.textContent = `You scored ${score} points.`;
            break;

        case 20:
            review = document.querySelector('#review').textContent = 'Awesome!';
            rating = document.querySelector('.second').classList.remove('hide');
            finalResult.textContent = `You scored  ${score} points.`;
            break;

        case 15:
            review = document.querySelector('#review').textContent = ' Try Harder!';
            rating = document.querySelector('.third').classList.remove('hide');
            finalResult.textContent = `You scored  ${score} points.`;
            break;

        case 10:
            review = document.querySelector('#review').textContent = 'Better luck';
            rating = document.querySelector('.fourth').classList.remove('hide');
            finalResult.textContent = `You scored ${score} points.`;
            break;

        case 5:
            review = document.querySelector('#review').textContent = 'Read your book';
            rating = document.querySelector('.last').classList.remove('hide');
            finalResult.textContent = `You scored ${score} points.`;
            break;

        case 0:
            review = document.querySelector('#review').textContent = 'Bad';
            rating = document.querySelector('.last').classList.remove('hide');
            finalResult.textContent = `You scored ${score} points.`;
            break;
    }
}

 //quiz questions
const quiz = [
    {
        question: 'What is the S.I unit of Mass?',
        answers: ['KG', 'KM', 'CM'],
        correct: 'KG',
        value: 0
    },

    {
        question: 'Convert 500km/hr to m/s?',
        answers: ['120.79m/s', '166.79m/s', '138.79m/s'],
        correct: '138.79m/s',
        value: 2
    },

    {
        question: 'What is Newton'/'s third law of motion?',
        answers: ['For every reaction there must be an equal and opposing motion', 'It occupies space', 'Force is the product of acceleration'],
        correct: 'For every reaction there must be an equal and opposing motion',
        value: 0
    },

    {
        question: 'A car travelling at a speed of 30km/hr, arrives at its destination in 30mins.How much distance was covered?',
        answers: ['1699km', '1499km', '1599km'],
        correct: '1499km',
        value: 1
    },
    {
        question: 'What is used for internal measurements?',
        answers: ['Micrometer Screwguage', 'Vernier Calliper', 'Tape rule'],
        correct: 'Tape rule',
        value: 2
    }
];