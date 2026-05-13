function resumir(lista) {
    return lista.reduce(
        (acc, f) => {
            if (f.genero === 'F')
                acc.mulheres++
            else {
                acc.homens++
            }
            acc.media_salarial += f.salario / lista.length
            if (f.idade > acc.idade_max)
                acc.idade_max = f.idade
            if (f.idade < acc.idade_min)
                acc.idade_min = f.idade
            return acc
        },
        { homens: 0, mulheres: 0, media_salarial: 0, idade_max: -1, idade_min: Infinity }
    )
}

let funcionarios = [
    { nome: 'Alice', idade: 40, genero: 'F', salario: 6000 },
    { nome: 'Bruna', idade: 28, genero: 'F', salario: 3200 },
    { nome: 'Carlos', idade: 51, genero: 'M', salario: 7000 },
]

console.log(resumir(funcionarios))