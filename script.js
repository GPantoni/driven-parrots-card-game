const nCards = 0;
let timer = 0;
let totalMoves = 0;

function cardsAmount() {
    nCards = prompt('Informe o número de cartas.(Escolha um número par de 4 a 14');

    while(nCards < 4 || nCards > 14 || nCards % 2 !== 0) {
        nCards = prompt('Informe o número de cartas.(Escolha um número par de 4 a 14');
    }
}