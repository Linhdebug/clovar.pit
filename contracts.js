const CONTRACTS = [

{
    goal:150,
    rounds:10
},

{
    goal:300,
    rounds:10
},

{
    goal:600,
    rounds:12
},

{
    goal:1200,
    rounds:12
}

];

function nextContract(){

    game.contractIndex++;

    if(game.contractIndex >= CONTRACTS.length){

        alert("Has ganado la partida");
        return;
    }

    game.currentContract =
        CONTRACTS[game.contractIndex];

    game.round = 1;

    log("Nuevo contrato.");
}
