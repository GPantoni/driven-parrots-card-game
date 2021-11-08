let cards = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
]
let nCards = 0;
let timer = 0;
let totalMoves = 0;
let pairControl = 0;
let intervalId;
let firstCard;
let secondCard;

function cardsAmount() {
    while(nCards < 4 || nCards > 14 || nCards % 2 !== 0) {
        nCards = Number(prompt('Informe o número de cartas.(Escolha um número par de 4 a 14)'));
    }
}

function clock() {
    let nTime = document.querySelector('.timer');
    timer++;
    nTime.innerHTML = `${timer}s`;
}

function moveCounter() {
    let moves = document.querySelector('.moves');
    totalMoves++;
    moves.innerHTML = `${totalMoves}`;
}

function comparador() {
    return Math.random() - 0.5;
}

function gameDeck() {
    let deck = [];
    cards.sort(comparador);
    for(let i = 0; i < nCards/2; i++) {
        deck.push(cards[i]);
        deck.push(cards[i]);
    }
    deck.sort(comparador);

    return deck;
}

function setCardTable() {
    let deck = gameDeck();
    
    let table = document.querySelector('.main');
    
    for(let i = 0; i < deck.length; i++) {
        table.innerHTML += `
            <div class="card" data-identifier="card" onclick="clickCard(this)">
                <div class="back-face face" data-identifier="back-face">
                    <img src="/assets/front.png" alt="">
                </div>
                <div class="front-face face" data-identifier="front-face">
                    <img src="/assets/${deck[i]}.gif" alt="">
                </div>
            </div>
            `
    }

}

function start() {
    cardsAmount();
    setCardTable();
    intervalId = setInterval(clock, 1000);
}

function unclickCard() {
    let cardFront1 = firstCard.querySelector(".front-face");
    let cardBack1 = firstCard.querySelector(".back-face");
    
    let cardFront2 = secondCard.querySelector(".front-face");
    let cardBack2 = secondCard.querySelector(".back-face");

    cardFront1.classList.remove("front-face-clicked", "back-face-clicked");
    cardBack1.classList.remove("front-face-clicked", "back-face-clicked");
    
    cardFront2.classList.remove("front-face-clicked", "back-face-clicked");
    cardBack2.classList.remove("front-face-clicked", "back-face-clicked");
}

function endGame() {
    let finalCard = document.querySelectorAll(".complete");

    if(finalCard.length === nCards) {
        clearInterval(intervalId);
        alert(`Parabéns!!! Terminou o jogo em ${timer} segundos e ${totalMoves} movimentos`);
    }
}

function clickCard(clickedCard) {
    moveCounter();

    let cardFront = clickedCard.querySelector(".front-face");
    let cardBack = clickedCard.querySelector(".back-face");

    cardFront.classList.add("front-face-clicked");
    cardBack.classList.add("back-face-clicked");

    pairControl++;
    if(pairControl === 1) {
        firstCard = clickedCard;
    } else if(pairControl === 2) {
        secondCard =clickedCard;

        if(firstCard.innerHTML !== secondCard.innerHTML) {
            setTimeout(unclickCard, 1000);
            pairControl = 0;
        } else {
            firstCard.classList.add("complete");
            secondCard.classList.add("complete");
            pairControl = 0;
        }
    }

    setTimeout(endGame, 500);
}

start();