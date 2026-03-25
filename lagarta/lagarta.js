async function lagarta(){
    let lagarta = "(_)(_)(_)(ÔwÔ)";
    let lagartaG = "( _ )( _ )( _ )(ÔwÔ)";
    let espaco = "   ";

    function sleep(ms){
        return new Promise( resolve => setTimeout(resolve, ms));
    }
    /*for(let i = 0; i < 20; i++){
        lagarta = espaco + lagarta;
        console.log(lagarta);
        await sleep (600);
        console.clear();
        lagartaG = espaco + lagartaG;
        console.log(lagartaG);
        await sleep (600);
        console.clear();*/

    for(let i = 0; i < 20; i++){
        console.log(i % 2 == 0? lagarta = espaco + lagarta:
            lagartaG = espaco + lagartaG);
        await sleep (600);
        console.clear();
    }
}
    
    
    

