class NumeroInvalidoError extends Error {}

function validarInt() {
    if (!Number.isInteger(n)) {
        return new NumeroInvalidoError(`Numero: ${n}`)
    }
    return null
}

let n = 'asdsa'
console.log(validarInt(n))