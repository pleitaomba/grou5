const cards = document.querySelectorAll('.card');
const resetButton = document.getElementById('reset-button');

// Card images array
const cardImages = [
    './images/invesment-up.png',
    './images/invesment-down.png',
    './images/unexpected-expense.png',
    './images/saving-bonus.png',
    './/images/money-math.png',
    './images/good-deed.png',
    './images/trade.png',
    './images/business.png',
    './images/education.png'
];

// Shuffle cards
function shuffleCards() {
    const shuffled = [...cardImages].sort(() => Math.random() - 0.5);
    cards.forEach((card, index) => {
        card.innerHTML = `<img src="${shuffled[index]}" alt="Card ${index + 1}">`;
        card.classList.remove('flipped');
    });
}

// Flip card
function flipCard() {
    this.classList.add('flipped');
}

// Reset cards
function resetCards() {
    shuffleCards();
}

// Add event listeners
cards.forEach(card => card.addEventListener('click', flipCard));
resetButton.addEventListener('click', resetCards);

// Initial setup
shuffleCards();
