# Exemplo de Avaliação da 1ª Etapa

## Instruções

1. Baixe todo o material necessário para a realização da prova nos minutos iniciais, em seguida desconecte a internet.
2. A prova é individual e sem consulta a IA. É permitido consultar livros, slides e exemplos de códigos baixados.
3. Envie cada questão individualmente (q1.js, q2.js). Enviar em arquivo compactado implica penalização de -5 pontos na nota.
4. A prova vale 35 pontos no total. Cada questão tem sua pontuação individual assinalada.
5. Boa prova!

## Questões

**Q1** (10 pts) – Dada a lista (de objetos) de funcionários abaixo, escreva uma função que receba como entrada essa lista e retorne um objeto representando um resumo dos dados contendo: média salarial, contagem de homens e mulheres, idade mínima e máxima. **Não use laços de repetição**. Exemplo:

| Nome   | Idade | Gênero | Salário |
| ------ | ----- | ------ | ------- |
| Alice  | 40    | F      | R$ 6000 |
| Bruna  | 28    | F      | R$ 3200 |
| Carlos | 51    | M      | R$ 7000 |

```javascript
// Retorno Esperado
{
    idade_min: 28,
    idade_max: 51,
    mulheres: 2,
    homens: 1,
    media_salarial: 5400
}
```

**Q2** (25 pts) – Implemente um sistema de controle de estoque que atenda aos requisitos abaixo modelando os dados e comportamentos utilizando as construções adequadas do JavaScript.

1. Um estoque tem uma lista (Array) de itens.
2. Cada item tem um identificador, uma descrição, e uma quantidade.
3. É possível abastecer um estoque com itens ou retirá-los para consumo.
   - Crie métodos abastecer(item) e retirar(id, quantidade).
4. Não deve haver itens com identificador duplicado no estoque. Caso um identificador já exista, some as quantidades automaticamente e preserve a descrição anterior.
5. Só é possível retirar itens para consumo se houver quantidade suficiente. Caso não haja, lance uma exceção usando throw.
6. O estoque deve manter uma lista de registros efetuados de entrada e saída de materiais.

Teste seu programa com a sequência de operações abaixo:

1. Crie o estoque e adicione os seguintes itens (nesta ordem):

| ID  | Descrição       | Quantidade | Observação          |
| --- | --------------- | ---------- | ------------------- |
| 1   | Caixa de Tintas | 40un.      | Adiciona novo item. |
| 2   | Pincel          | 20un.      | Adiciona novo item. |
| 3   | Papel           | 500un.     | Adiciona novo item. |
| 4   | Tesoura         | 0un.       | Adiciona novo item. |
| 2   | Pincel          | 10un.      | Soma a quantidade.  |

2. Retire os seguintes itens (nesta ordem):

| ID  | Descrição       | Quantidade | Observação                                                            |
| --- | --------------- | ---------- | --------------------------------------------------------------------- |
| 1   | Caixa de Tintas | 10un.      | Retira.                                                               |
| 2   | Pincel          | 30un.      | Retira.                                                               |
| 4   | Tesoura         | 10un.      | Retira.                                                               |
| 4   | Tesoura         | 10un.      | Lança erro (trate com try catch no programa principal). Não registra. |
| 4   | Tesoura         | 5un.       | Retira.                                                               |

3. Exiba o estoque e os registros.

| ID  | Descrição       | Quantidade |
| --- | --------------- | ---------- |
| 1   | Caixa de Tintas | 30un.      |
| 2   | Pincel          | 0un.       |
| 3   | Papel           | 500un.     |
| 4   | Tesoura         | 0un.       |

4. Registro Final Esperado.

| Registro               |
| ---------------------- |
| Abasteceu 40un. de #1  |
| Abasteceu 20un. de #2  |
| Abasteceu 500un. de #3 |
| Abasteceu 15un. de #4  |
| Abasteceu 20un. de #2  |
| Retirou -10un. de #1   |
| Retirou -30un. de #2   |
| Retirou -10un. de #4   |
| Retirou -5un. de #4    |
