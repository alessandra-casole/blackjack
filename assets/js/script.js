
let cards = [];

let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

let starterBtn = document.querySelector(".start-game");
let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let cardBtn = document.querySelector(".new-card");

let playerEl = document.querySelector(".player-el");

let player = {
    name: "Player",
    chips: 200
}

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {

    let randomNumber =  Math.floor( Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if(randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    } 

    sumEl.textContent = "Sum: " +  sum;
    

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

starterBtn.addEventListener("click", () => {
    startGame();
});

function newCard() {
    if(isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

cardBtn.addEventListener("click", () => {
    newCard();
});











