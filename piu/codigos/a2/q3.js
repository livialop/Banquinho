let numeros = [1,2,22,44]

let cont = {
    'pares': 0,
    'impares': 0
}

for (n of numeros) {
    if (n % 2 === 0) {
        cont.pares++
    } else {
        cont.impares++
    }    
}

console.log(cont)