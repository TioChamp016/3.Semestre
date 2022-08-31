function principal(){
    //exercício 5
    let n = Number(prompt(`Entre com o valor de "N"`))
    resultado = calculando(n)
    document.getElementById("saída").innerHTML = resultado
    //calculando S
}
function calculando(n,resultado){
    if(n <= 0){
        return `Lamento. Mas "N" precisa ser um número positivo maior que zero para que o sistema consiga calcular o somatório S.`
    }
    else{
        let s = 0
        for(let i=1;i<=n;i++){
            s = s + (i/(i**2))
        }
        return`O valor do somatório S é igual a: ${s}` 
    }
}