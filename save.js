function saveGame(){

    localStorage.setItem(
        "debtSlotsSave",
        JSON.stringify(game)
    );
}

function loadGame(){

    const data =
        localStorage.getItem("debtSlotsSave");

    if(!data) return;

    Object.assign(
        game,
        JSON.parse(data)
    );

    updateUI();
}
