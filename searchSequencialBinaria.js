function principal5(){
    //exercício 5
    let n = Number(prompt(`Entre com o valor de "N"`))
    resultado = calculando5(n)
    document.getElementById("saída").innerHTML = resultado
    //calculando S
}
function calculando5(n){
    if(n <= 0){
        return `Lamento. Mas "N" precisa ser um número inteiro positivo para que o sistema consiga calcular o somatório S.`
    }
    else{
        let s = 0
        for(let i=1;i<=n;i++){
            s = s + (i/(i**2))
        }
        return`O valor do somatório S é igual a: ${s}` 
    }
}
function principal6(){
    //exercício 5
    let n = Number(prompt(`Entre com o número "N" de elementos a preencher o vetor.`))
    resultado = calculando6(n)
    document.getElementById("saída").innerHTML = resultado
    //calculando S
}
function calculando6(n){
    let vet = []
    let resultado = " "
    if(n <= 0){
        return `Lamento. Mas "N" precisa ser um número inteiro positivo para que o sistema consiga construir a sequencia de Fibonacci.`
    }
    else{
        for(let i=0;i<(n);i++){
            if (i==0 || i==1){
                vet.push(1)
                resultado += `${i+1}º Elemento: ${vet[i]}</br>`
            }
            else{
                vet.push(vet[i-1]+vet[i-2])
                resultado += `${i+1}º Elemento: ${vet[i]}</br>`
            }
        }
        return`A sequencia de Fibonacci com ${n} elementos é:</br>${resultado}` 
    }
}
