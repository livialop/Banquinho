function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    
    this.apresentar = function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

p1 = new Pessoa('André', 18)
p1.apresentar()
new Pessoa('Bruno', 28).apresentar()