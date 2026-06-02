const game = {

    coins:10,
    debt:100,
    round:1,

    contractIndex:0,

    currentContract:{
        goal:150,
        rounds:10
    },

    artifacts:[]
};

const coinsEl = document.getElementById("coins");
const debtEl = document.getElementById("debt");
const roundEl = document.getElementById("round");
const goalEl = document.getElementById("goal");

function updateUI(){

    coinsEl.textContent = game.coins;
    debtEl.textContent = game.debt;
    roundEl.textContent = game.round;
    goalEl.textContent =
        game.currentContract.goal;

    saveGame();
}

function endTurn(){

    game.round++;

    game.debt += 10;

    game.artifacts.forEach(a=>{

        if(a.id==="debt_eater"){
            game.debt -= 5;
        }

    });

    if(game.round >
       game.currentContract.rounds){

        if(game.coins >= game.currentContract.goal){

            nextContract();

        }else{

            alert("GAME OVER");
        }
    }

    updateUI();
}

function log(text){

    const div =
        document.getElementById("logText");

    div.innerHTML =
        text + "<br>" + div.innerHTML;
}

function renderArtifacts(){

    const list =
        document.getElementById("artifactList");

    list.innerHTML = "";

    game.artifacts.forEach(a=>{

        list.innerHTML += `
        <div class="card">
            <b>${a.name}</b>
            <p>${a.desc}</p>
        </div>
        `;
    });
}

function renderShop(){

    const shop =
        document.getElementById("shopItems");

    shop.innerHTML = "";

    ALL_ARTIFACTS.forEach(a=>{

        shop.innerHTML += `
        <div class="card">
            <h3>${a.name}</h3>
            <p>${a.desc}</p>
            <p>${a.cost} monedas</p>
            <button onclick="buyArtifact('${a.id}')">
                Comprar
            </button>
        </div>
        `;
    });
}

document
.getElementById("spinBtn")
.addEventListener(
    "click",
    spinSlots
);

loadGame();
renderShop();
updateUI();
