class Personagem {
    ataque
    constructor(nome, vida, ataque) {
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
    }

    receberDano(valor) {
        if (valor < 0)
            throw new Error('O valor do dano não pode ser menor que 0')
        this.vida -= valor - this.bonusDefesa()
    }

    bonusDefesa() { return 0 }

    estaVivo() {
        return this.vida > 0
    }

    atacar(alvo) {
        console.log(`${this.nome} atacou ${alvo.nome}`)
        alvo.receberDano(this.ataque + this.bonusAtaque())
    }
}

class Guerreiro extends Personagem {
    #escudo 
    constructor (nome, vida, ataque, escudo) {
        super(nome, vida, ataque)
        this.#escudo = escudo
    }

    bonusDefesa() { return this.#escudo }
}

class Mago extends Personagem {
    #magia
    constructor (nome, vida, ataque, magia) {
        super(nome, vida, ataque)
        this.#magia = magia
    }

    bonusAtaque() {
        if (this.#magia > 10) {
            this.#magia -= 10
            return this.ataque // TODO: Falta testar
        }
        return 0
    }
}

let a = new Guerreiro('Alex', 100, 73, 0)
let g = new Guerreiro('Giva', 100, 25, 15)
let e = new Mago('Emmily', 100, 40, 15)

e.atacar(g)
