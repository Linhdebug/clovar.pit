const ALL_ARTIFACTS = [

{
    id:"lucky_coin",
    name:"Moneda de la Suerte",
    desc:"+1 moneda por cada giro",
    cost:25,
    effect(){
        game.coins += 1;
    }
},

{
    id:"diamond_lens",
    name:"Lente de Diamante",
    desc:"Los diamantes pagan x2",
    cost:50
},

{
    id:"debt_eater",
    name:"Comedeudas",
    desc:"Reduce deuda en 5 al final de ronda",
    cost:80
}

];

function buyArtifact(id){

    const item = ALL_ARTIFACTS.find(a=>a.id===id);

    if(game.coins < item.cost){
        log("No puedes comprarlo");
        return;
    }

    game.coins -= item.cost;

    game.artifacts.push(item);

    renderArtifacts();

    updateUI();
}

function applyArtifacts(reels,reward){

    game.artifacts.forEach(a=>{

        if(a.id==="lucky_coin"){
            game.coins += 1;
        }

        if(a.id==="diamond_lens"){

            reels.forEach(r=>{

                if(r.icon==="💎"){
                    game.coins += 5;
                }

            });
        }

    });
}
