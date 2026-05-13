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

let nomeValido = false
do {
    let nome = 'Ciro'
    try {
        validarNome(nome)
        nomeValido = true
    } catch (e) {
        console.log('Digite um nome de gente')
    }
} while (!nomeValido);

let idadeValida = false
do {
    let idade = 22
    try {
        validarIdade(idade)
        idadeValida = true
    } catch (e) {
        console.log('Digite uma idade maior que 0')
    }
} while (!idadeValida);

let foiOuNumFoiValido = false
do {
    let foiOuNumFoi = 'true' != 'false'
    try {
        validarFoiADisney(foiOuNumFoi)
        foiOuNumFoiValido = true
    } catch (e) {
        console.log('Não sei se foi à Disney')
    }
} while (!foiOuNumFoiValido);
