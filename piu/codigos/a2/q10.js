class ValorInvalidoError extends Error {}

function validarNome(nome) {
    if (typeof nome !== 'string') {
        throw new ValorInvalidoError('Nome inválido:', nome)
    }
}

function validarIdade(idade) {
    if (!Number.isInteger(idade) || idade < 0) {
        throw new ValorInvalidoError('Idade inválida:', idade)
    }
}

function validarFoiADisney(foiOuNumFoi) {
    if (typeof foiOuNumFoi !== 'boolean') {
        throw new ValorInvalidoError('Valor se foi à Disney inválido:', foiOuNumFoi)
    }
}

let nome = 'Ciro' // ou 653515
while (true) {
    try {
        validarNome(nome)
        break
    } catch (err) {
        console.log('nome inválido')
    }
}


let idade = 28 // ou 'vinte e oito'
while (true) {
    try {
        validarIdade(idade)
        break
    } catch (err) {
        console.log('idade inválida')
    }
}

let foi = true // ou 'foi'
while (true) {
    try {
        validarFoiADisney(foi)
        break
    } catch (err) {
        console.log('Sei não se foi, visse')
    }
}
console.log('deu certo de novo')