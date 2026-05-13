class Retangulo {
    constructor (altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    area () {
        return this.altura * this.largura
    }
}

ret1 = new Retangulo(1,3)
ret2 = new Retangulo(2,2)

console.log(ret1.area(), ret2.area())