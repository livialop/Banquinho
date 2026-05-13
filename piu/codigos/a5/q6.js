class ContaBancaria {
    #dinheiro = 0

    get saldo () {
        return `R$ ${this.#dinheiro}`
    }

    set saldo(valor) {
        if (valor < 0) {
            throw new Error('O saldo não pode ser negativo.')
        }
        this.#dinheiro = valor
    }
}

conta = new ContaBancaria()
console.log(conta.saldo)
conta.saldo = 10
console.log(conta.saldo)
conta.saldo = 0
console.log(conta.saldo)
// conta.saldo = -12
// console.log(conta.saldo)
