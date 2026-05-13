class Funcionario {
    #nome = ''
    #salarioBase = 0

    constructor (nome, salarioBase) {
        this.#nome = nome
        this.#salarioBase = salarioBase
    }

    #calcularBonus() {
        return this.#salarioBase / 10
    }

    salarioTotal() {
        return this.#salarioBase + this.#calcularBonus()
    }
}

p = new Funcionario('Carlos', 5000)
console.log(p.salarioTotal())
// console.log(p.#nome)