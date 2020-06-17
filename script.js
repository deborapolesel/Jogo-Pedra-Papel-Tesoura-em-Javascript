//declaração das variáveis do placar:
let userScore = 0;
let computerScore = 0;

// declaração das constantes. Buscando elementos no html para as funções:
const userScore_span = document.getElementById("pontosUsuário");
const computerScore_span = document.getElementById("pontosComputador");
const scoreBoard_div = document.querySelector(".pontuacao");
const result_p = document.querySelector(".resultado > p");
const rock_div = document.getElementById("opçãoPedra");
const paper_div = document.getElementById("opçãoPapel");
const scissors_div = document.getElementById("opçãoTesoura");

//Montar função de computador para sortear uma opção aleatória
function getComputerChoice(){
    const choices = ["opçãoPedra","opçãoPapel", "opçãoTesoura"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices [randomNumber];
}

//Converter as Ids em Palavras para mostrar na tela 
function converterPalavra(palavra){
    if (palavra === "opçãoPedra") return "Pedra";
    if (palavra === "opçãoPapel") return "Papel";
    else return "Tesoura";
}

//função para quando o usuário ou computador ganham ou empatam. Adição de pontuação no placar e alteração do parágrafo.
function usuárioGanhou(userChoise,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${converterPalavra(userChoise)}${smallUserWord} ganha de ${converterPalavra(computerChoice)}${smallComputerWord}. Você venceu!`

}

function usuárioPerdeu(userChoise,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${converterPalavra(userChoise)}${smallUserWord} perde de  ${converterPalavra(computerChoice)}${smallComputerWord}. Você perdeu!`
}

function usuárioEmpatou (userChoise,computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${converterPalavra(userChoise)}${smallUserWord} é igual à ${converterPalavra(computerChoice)}${smallComputerWord}. Vocês empataram!`
}

//função para o jogo. Verifica em ganha ou empata
function game(userChoise){
    const computerChoice = getComputerChoice();
    switch (userChoise +" "+ computerChoice) {

        case "opçãoPedra opçãoTesoura":
        case "opçãoPapel opçãoPedra":
        case "opçãoTesoura opçãoPapel":
            usuárioGanhou(userChoise,computerChoice);
            break;

        case "opçãoPedra opçãoPapel":
        case "opçãoPapel opçãoTesoura":
        case "opçãoTesoura opçãoPedra":
            usuárioPerdeu(userChoise,computerChoice);
            break;

        case "opçãoPedra opçãoPedra":
        case "opçãoPapel opçãoPapel":
        case "opçãoTesoura opçãoTesoura":
            usuárioEmpatou(userChoise,computerChoice);
            break;
    }
}

//função para eventos com os botões de seleção pedra, papel e tesoura.
function main (){
    rock_div.addEventListener('click',function() {
        game("opçãoPedra");
    })

    paper_div.addEventListener('click',function() {
        game("opçãoPapel")
    })

    scissors_div.addEventListener('click',function() {
        game("opçãoTesoura")
    })
}

main();