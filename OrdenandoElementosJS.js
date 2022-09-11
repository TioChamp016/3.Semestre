function trabalho(){
/*Instruções
Fazer um programa que execute três métodos de ordenação: bubblesort, seleção direta e inserção direta.
Os testes devem ser realizados em 3 diferentes vetores de 1000 elementos de números inteiros: aleatório, ordenado e invertido.
Verificar o tempo de execução de cada caso e analisar os resultados obtidos.
*/
    var vet1 = []
    var vet1cópia = []
    for (let i=1;i<=1000;i++){
        vet1.push(i)
        vet1cópia.push(i)
    }
    var vet2 = []
    var vet2cópia = []
    for (let i=1000;i>0;i--){
        vet2.push(i)
        vet2cópia.push(i)
    }
    var vet3 = []
    var vet3cópia = []
    for (let i=0;i<1000;i++){
        vet3.push(Math.floor(Math.random() * 1000))
        vet3cópia.push(vet3[i])
    }
    let opcao
    do{
        opcao = Number(prompt(`Digite a opção desejada 
        Digite 0 para encerrar o programa
        Digite 1 para ordenar por BUBBLESORT
        Digite 2 para ordenar por SELEÇÃO DIRETA
        Digite 3 para ordenar por INSERÇÃO DIRETA`))
        switch(opcao){
            case 1: bubbleSort(vet1,vet2,vet3)
                break
            case 2: seleçãoDireta(vet1,vet2,vet3)
                break
            case 3: inserçãoDireta(vet1,vet2,vet3)
            break
        }
    }
    while(opcao!=0)
    document.getElementById("print").innerHTML = `Vetor Ordenado:</br>[${vet1cópia}]</br>Vetor Invertido:</br>[${vet2cópia}]</br>Vetor Aleatório:</br>[${vet3cópia}]`
}
function bubbleSort(vet1,vet2,vet3){
    const inicio1 = performance.now()
    for(let i=0;i<vet1.length-1;i++){
        var aux
        for(let j=0;j<vet1.length-i-1;j++){
            if(vet1[j]> vet1[j+1]){
                aux = vet1[j]
                vet1[j] = vet1[j + 1]
                vet1[j+1] = aux
            }
        }
    }
    const fim1 = performance.now()
    const t1 = (`A operação acima levou ${fim1 - inicio1} milissegundos`)
    const inicio2 = performance.now()
    for(let i=0;i<vet2.length-1;i++){
        var aux
        for(let j=0;j<vet2.length-i-1;j++){
            if(vet2[j]> vet2[j+1]){
                aux = vet2[j]
                vet2[j] = vet2[j + 1]
                vet2[j+1] = aux
            }
        }
    }
    const fim2 = performance.now()
    const t2 = (`A operação acima levou ${fim2 - inicio2} milissegundos`)
    const inicio3 = performance.now()
    for(let i=0;i<vet3.length-1;i++){
        var aux
        for(let j=0;j<vet3.length-i-1;j++){
            if(vet3[j]> vet3[j+1]){
                aux = vet3[j]
                vet3[j] = vet3[j + 1]
                vet3[j+1] = aux
            }
        }
    }
    const fim3 = performance.now()
    const t3 = (`A operação acima levou ${fim3 - inicio3} milissegundos`)
    document.getElementById("printA").innerHTML = `Ordenando os 3 vetores usando BUBBLESORT:</br>[${vet1}]</br>${t1}</br>[${vet2}]</br>${t2}</br>[${vet3}]</br>${t3}`
    alert(`Vetores ordenados com sucesso através do BUBBLESORT!`)
}
function seleçãoDireta(vet1,vet2,vet3){
    const inicio4 = performance.now()
    for(var i=0;i<vet1.length;i++){
        var menor = vet1[i]
        var pos = i
        for(var j=i+1;j<vet1.length;j++){
            if(vet1[j]<menor){
                menor = vet1[j]
                pos = j
            }
        }
        var aux = vet1[i]
        vet1[i] = vet1[pos]
        vet1[pos] = aux
    }
    const fim4 = performance.now()
    const t4 = (`A operação acima levou ${fim4 - inicio4} milissegundos`)
    const inicio5 = performance.now()
    for(var i=0;i<vet2.length;i++){
        var menor = vet2[i]
        var pos = i
        for(var j=i+1;j<vet2.length;j++){
            if(vet2[j]<menor){
                menor = vet2[j]
                pos = j
            }
        }
        var aux = vet2[i]
        vet2[i] = vet2[pos]
        vet2[pos] = aux
    }
    const fim5 = performance.now()
    const t5 = (`A operação acima levou ${fim5 - inicio5} milissegundos`)
    const inicio6 = performance.now()
    for(var i=0;i<vet3.length;i++){
        var menor = vet3[i]
        var pos = i
        for(var j=i+1;j<vet3.length;j++){
            if(vet3[j]<menor){
                menor = vet3[j]
                pos = j
            }
        }
        var aux = vet3[i]
        vet3[i] = vet3[pos]
        vet3[pos] = aux
    }
    const fim6 = performance.now()
    const t6 = (`A operação acima levou ${fim6 - inicio6} milissegundos`)
    document.getElementById("printB").innerHTML = `Ordenando os 3 vetores usando SELEÇÃO DIRETA:</br>[${vet1}]</br>${t4}</br>[${vet2}]</br>${t5}</br>[${vet3}]</br>${t6}`
    alert(`Vetores ordenados com sucesso através da SELEÇÃO DIRETA!`)
}
function inserçãoDireta(vet1,vet2,vet3){
    const inicio7 = performance.now()
    for(var i=1;i<vet1.length;i++){
        for(var j=0;j<i;j++){
            if(vet1[i]<vet1[j]){
                var aux = vet1[i]
                for(var k=i;k>j;k--){
                    vet1[k] = vet1[k-1]
                }
                vet1[j] = aux
            }
        }
    }
    const fim7 = performance.now()
    const t7 = (`A operação acima levou ${fim7 - inicio7} milissegundos`)
    const inicio8 = performance.now()
    for(var i=1;i<vet2.length;i++){
        for(var j=0;j<i;j++){
            if(vet2[i]<vet2[j]){
                var aux = vet2[i]
                for(var k=i;k>j;k--){
                    vet2[k] = vet2[k-1]
                }
                vet2[j] = aux
            }
        }
    }
    const fim8 = performance.now()
    const t8 = (`A operação acima levou ${fim8 - inicio8} milissegundos`)
    const inicio9 = performance.now()
    for(var i=1;i<vet3.length;i++){
        for(var j=0;j<i;j++){
            if(vet3[i]<vet3[j]){
                var aux = vet3[i]
                for(var k=i;k>j;k--){
                    vet3[k] = vet3[k-1]
                }
                vet3[j] = aux
            }
        }
    }
    const fim9 = performance.now()
    const t9 = (`A operação acima levou ${fim9 - inicio9} milissegundos`)
    document.getElementById("printC").innerHTML = `Ordenando os 3 vetores usando INSERÇÃO DIRETA:</br>[${vet1}]</br>${t7}</br>[${vet2}]</br>${t8}</br>[${vet3}]</br>${t9}`
    alert(`Vetores ordenados com sucesso através do INSERÇÃO DIRETA!`)
}