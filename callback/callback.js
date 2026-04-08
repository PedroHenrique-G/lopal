function callback(){
    let minhaFunc = (num1, num2, operacao) => {
        return operacao(num1, num2);
    }
    //operacao = (a, b) => {a + b}
    const calcular = (a, b) => {return a + b};

   console.log(minhaFunc(2, 3, calcular));
}
callback();