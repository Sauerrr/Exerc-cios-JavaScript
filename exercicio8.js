// Obtem a referencia ao documento HTML
var board = document.getElementById('board')
var board = document.getElementById('message')

let jogadorAtual = 'x';
let cells = Array(9).fill('');
let gameover = false;

//Cria células do tabuleiro e adciona manipuladores
for (let i = 0; i < 9; i++){
    let cell = document.createElement('div');
    cell.classList('cell');
    addEventListener('click', () => handleCellClick (i));
    board.appendChild(cell);

}

//Funçâo que lida com o clique de uma célula
function handleCellClick(index){

}