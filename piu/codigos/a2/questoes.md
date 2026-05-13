# Questões

**Q1** - Escreva um programa JavaScript que classifique se um dado número `n` é positivo, negativo ou zero.  
Exiba:

- `positivo` se o número for maior que zero.
- `negativo` se for menor que zero.
- `zero` se for igual a zero.

**Q2** – Escreva um programa JavaScript que gere a tabuada de multiplicação de um valor pré-definido n.

**Q3** – Escreva um programa JavaScript que conta quantos números são pares e quantos são ímpares, dado um array de números inteiros. Considere que zero é par. Use a construção **`for`**`... of`.

**Q4** – Escreva um programa JavaScript que cadastre os seguintes dados de uma pessoa: nome `string`, idade `int`, já foi à Disney `booleano`. Os dados devem ser representados como um objeto javascript (JSON, semelhante aos dicionários Python) usando a sintaxe de pares chave-valor e devem ser exibidos usando a notação de acesso a atributos de objeto `variavel.atributo`.

Ex.:

```bash
Alex
10
false
```

**Q5** – Escreva um programa JavaScript que cadastre os mesmos dados de uma pessoa como na questão Q4: nome (string), idade (int), já foi à Disney (booleano). Os dados agora devem ser representados como uma matriz 3x2 (array de arrays), onde cada linha é uma lista com nome e valor do atributo. Tanto as chaves quanto os dados devem ser exibidos dentro de um laço **`for`**`... in.`

Ex.:

```bash
nome Teste
idade 10
ja_foi_a_Disney false
```

**Q6** – Reescreva o programa da questão Q1 de maneira que ele valide se o tipo da variável `n` é numérico (inteiro ou real). Caso não seja, exiba uma mensagem informando o tipo inválido.

**Q7** – Reescreva o programa da questão Q2 de maneira que ele valide se o tipo da variável `n` é inteiro. Caso não seja, lance uma exceção (use **`throw`**).

**Q8** – Reescreva o programa da questão Q3 como uma função que receba como parâmetro a lista de números, armazene a quantidade de pares e ímpares em um objeto JSON e retorne-o no final. Caso o número não seja inteiro, lance uma exceção (use **`throw`**).

Ex.:

```bash
{
    'pares': 3,
    'impares': 5
}
```

**Q9** – Reescreva o programa da questão Q4 com funções específicas de validação para cada campo (`validarNome, validarIdade, validarFoiADisney`). Caso um valor seja inválido, lance uma exceção dentro da própria função de validação (use **`throw`**).

**Q10** – Reescreva o programa da questão Q9 de maneira que peça como entrada os dados do usuário até que o usuário digite todos os valores de tipos válidos. Aproveite os valores válidos já digitados (não os peça novamente). Combine **`throw`** com **`try`**`.. catch.`  
Obs.: Nesta questão, você precisará usar o navegador para testar.

1. Salve seu código como q10.html.
2. Envolva seu script na tag `<script\> ... \</script\>`
3. Para fazer entrada de dados do usuário, use [prompt('mensagem')](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt).

`Ex.:`  
**`q10.html`**

```html
<script>
    let nome = prompt("Digite o nome:");
    console.log("Olá, " + nome); // ou alert('Olá, ' + nome)
</script>
```

Abrindo o script acima no navegador, ele exibe uma janelinha pedindo o nome e depois exibe no console o que foi digitado.
