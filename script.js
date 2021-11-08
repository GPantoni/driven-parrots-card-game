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
let intervalId;

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

function move() {
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
    let table = document.querySelector('.main');

    table.innerHTML += `
        <div class="card">
            <div class="back-face face">
                <img src="/assets/front.png" alt="">
            </div>
            <div class="front-face face">
                <img src="/assets/bobrossparrot.gif" alt="">
            </div>
        </div>
        `
}

function start() {
    cardsAmount();

    intervalId = setInterval(clock, 1000);
    
}