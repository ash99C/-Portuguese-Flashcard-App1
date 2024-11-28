javascript
const flashcards = [
    { portuguese: "Bom dia!", english: "Good morning!" },
    { portuguese: "Como está?", english: "How are you?" },
    { portuguese: "Obrigado/a.", english: "Thank you." },
    { portuguese: "Quanto custa?", english: "How much does it cost?" },
    { portuguese: "Onde está o banheiro?", english: "Where is the bathroom?" }
];

let currentCard = 0;

const frontText = document.getElementById('front-text');
const backText = document.getElementById('back-text');
const quizSection = document.getElementById('quiz-section');
const quizQuestion = document.getElementById('quiz-question');
const quizAnswer = document.getElementById('quiz-answer');
const quizFeedback = document.getElementById('quiz-feedback');
// Initialize flashcard
function updateFlashcard() {
    frontText.textContent = flashcards[currentCard].portuguese;
    backText.textContent = flashcards[currentCard].english;
}

document.getElementById('next').addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcards.length;
    updateFlashcard();
});

document.getElementById('prev').addEventListener('click', () => {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    updateFlashcard();
});

document.getElementById('quiz').addEventListener('click', () => {
    quizSection.classList.remove('hidden');
    quizQuestion.textContent = What does "${flashcards[currentCard].portuguese}" mean?;
});

document.getElementById('submit-answer').addEventListener('click', () => {
    const answer = quizAnswer.value.trim().toLowerCase();
    const correctAnswer = flashcards[currentCard].english.toLowerCase();
    if (answer === correctAnswer) {
        quizFeedback.textContent = "Correct!";
        quizFeedback.style.color = "green";
    } else {
        quizFeedback.textContent = Incorrect! The correct answer is "${flashcards[currentCard].english}".;
        quizFeedback.style.color = "red";
    }
    quizAnswer.value = "";
});

updateFlashcard();
`