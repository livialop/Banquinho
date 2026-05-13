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

let nome = 'Ciro'
validarNome(nome)

let idade = 32
validarIdade(idade)

let foi = true
validarFoiADisney(foi)