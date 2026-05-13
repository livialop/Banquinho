class InteiroInvalidoError extends Error {}

let n = 'jesus'

function validarInt(n){
    if (!Number.isInteger(n)) {
        return new InteiroInvalidoError('Não é inteiro')
    }
}

console.log('deu certo')
