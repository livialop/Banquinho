class Estoque {
    constructor() {
        this.itens = []
        this.registros = []
    }

    abastecer(item) {
        this.registros.push(`Abasteceu ${item.quantidade}un. de #${item.id}`)
        for (let i of this.itens) {
            if (i.id === item.id) {
                i.quantidade += item.quantidade
                return
            }
        }
        this.itens.push(item)
    }

    retirar(id, quantidade) {
        for (let i of this.itens) {
            if (i.id === id) {
                if (i.quantidade >= quantidade) {
                    i.quantidade -= quantidade
                    this.registros.push(`Retirou ${quantidade} de #${id}`)
                    return
                } else {
                    throw new Error(`Item #${id} tem menos de ${quantidade}un.`)
                }
            }
        }
        throw new Error(`Não encontrei o item #${id}`)
    }
}

let estoque = new Estoque()
console.log(estoque)

estoque.abastecer({id: 1, descricao: 'Tintas', quantidade: 40})
estoque.abastecer({id: 2, descricao: 'Pincel', quantidade: 20})
estoque.abastecer({id: 3, descricao: 'Papel', quantidade: 500})
estoque.abastecer({id: 4, descricao: 'Tesoura', quantidade: 15})
estoque.abastecer({id: 2, descricao: 'Pincel', quantidade: 10})

estoque.retirar(1, 10)
estoque.retirar(2, 30)
estoque.retirar(4, 10)
// ID não existe
try {
    estoque.retirar(23, 10)
} catch (err) {
    console.log('Erro:', err.message)
}
// Quantidade insuficiente
try {
    estoque.retirar(4, 10)
} catch (err) {
    console.log('Erro:', err.message)
}
estoque.retirar(4, 5)

console.log(estoque)