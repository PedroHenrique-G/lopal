function mapa(){
    const frutas = new Map();

    frutas.set("maçã", 500);
    frutas.set("Banana", 300);
    frutas.set("Laranja", 200);
    frutas.set("pera", 300);
    
    let preco = frutas.get("Banana");

    console.log(preco);
}
mapa();