class Animal {
    nome

    constructor (nome) {
        this.nome = nome
    }

    falar() {
        console.log(`${this.nome} emitiu um som.`)
    }
}

class Cachorro extends Animal {
    constructor (nome) {
        super(nome)
    }

    falar() {
        console.log(`${this.nome} latiu: Au au!`)
    }
}

class BemTeVi extends Animal {
    constructor (nome) {
        super(nome)
    }

    falar() {
        console.log(`${this.nome} cantou: Bem-te-vi, oh meu bem-te-vi...`)
    }
}

let a0 = new Animal('Gabriel')
let a1 = new Cachorro('Beethoven')
let a2 = new BemTeVi('Renato Terra')

a0.falar()
a1.falar()
a2.falar()