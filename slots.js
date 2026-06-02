const SYMBOLS = [
    {icon:"🍒", value:2},
    {icon:"🍋", value:3},
    {icon:"🔔", value:5},
    {icon:"💎", value:10},
    {icon:"💀", value:-5}
];

function spinSlots(){

    if(game.coins <= 0){
        log("No tienes monedas.");
        return;
    }

    game.coins--;

    const r1 = SYMBOLS[Math.floor(Math.random()*SYMBOLS.length)];
    const r2 = SYMBOLS[Math.floor(Math.random()*SYMBOLS.length)];
    const r3 = SYMBOLS[Math.floor(Math.random()*SYMBOLS.length)];

    document.getElementById("r1").textContent = r1.icon;
    document.getElementById("r2").textContent = r2.icon;
    document.getElementById("r3").textContent = r3.icon;

    evaluateSpin([r1,r2,r3]);

    updateUI();
}

function evaluateSpin(reels){

    let reward = 0;

    if(
        reels[0].icon === reels[1].icon &&
        reels[1].icon === reels[2].icon
    ){
        reward = reels[0].value * 5;
        log("TRÍO => +" + reward);
    }
    else if(
        reels[0].icon === reels[1].icon ||
        reels[1].icon === reels[2].icon ||
        reels[0].icon === reels[2].icon
    ){
        reward = reels[0].value * 2;
        log("Pareja => +" + reward);
    }

    game.coins += reward;

    applyArtifacts(reels,reward);

    endTurn();
}
