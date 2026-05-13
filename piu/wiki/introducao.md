# Introdução ao JavaScript

## Variáveis

Se você já conhece variáveis em outras linguagens, a ideia é a mesma. Em JS moderno, usamos `let` e `const`:

```javascript
let nome = "Maria"; // pode ser reatribuída
const PI = 3.14159; // não pode ser reatribuída

nome = "João"; // ✅ válido
PI = 3; // ❌ erro!
```

> [!TIP]
> Evite `var` — ela existe por razões históricas, mas tem comportamentos confusos de escopo. Prefira sempre `let` e `const`.

### Tipos de dados

JavaScript possui **tipagem dinâmica**: o tipo é inferido automaticamente.

```javascript
let numero = 42; // number
let texto = "Olá, mundo!"; // string
let ativo = true; // boolean
let vazio = null; // null (ausência intencional)
let indefinido; // undefined (não inicializado)
let lista = [1, 2, 3]; // array
let pessoa = { nome: "Ana" }; // object
```

---

## Operadores

Os operadores aritméticos são os mesmos de sempre (`+`, `-`, `*`, `/`, `%`). Mas preste atenção nos de comparação:

```javascript
5 == "5"; // true  — compara só o valor (evite!)
5 === "5"; // false — compara valor E tipo (prefira sempre este)
5 !== "5"; // true
```

> [!IMPORTANT]
> **Regra de ouro:** use sempre `===` e `!==` para evitar surpresas com conversões automáticas de tipo.

---

## Condicionais

Idêntico ao que você já conhece:

```javascript
let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}
```

### Operador ternário

Uma forma compacta para condições simples:

```javascript
let idade = 20;
let status = idade >= 18 ? "adulto" : "menor de idade";
console.log(status); // "adulto"
```

---

## Loops

### `for`

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
```

### `while`

```javascript
let contador = 0;
while (contador < 3) {
    console.log("contando:", contador);
    contador++;
}
```

### `for...of` (para arrays)

```javascript
let frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
    console.log(fruta);
}
```

---

## Funções

Funções em JS são **cidadãs de primeira classe** — podem ser armazenadas em variáveis, passadas como argumento e retornadas de outras funções.

### Declaração clássica

```javascript
function somar(a, b) {
    return a + b;
}

console.log(somar(3, 4)); // 7
```

### Arrow function (sintaxe moderna)

```javascript
const somar = (a, b) => a + b;

console.log(somar(3, 4)); // 7
```

Arrow functions são amplamente usadas no JS moderno por sua sintaxe concisa.

---

## Arrays e métodos essenciais

Arrays em JS têm métodos poderosos para transformar e filtrar dados:

```javascript
let numeros = [1, 2, 3, 4, 5];

// map — transforma cada elemento
let dobrados = numeros.map((n) => n * 2);
// [2, 4, 6, 8, 10]

// filter — filtra por condição
let pares = numeros.filter((n) => n % 2 === 0);
// [2, 4]

// reduce — acumula em um único valor
let soma = numeros.reduce((acc, n) => acc + n, 0);
// 15
```

---

## Objetos

Objetos são coleções de pares **chave: valor** e são a base de praticamente tudo em JavaScript.

```javascript
const pessoa = {
    nome: "Carlos",
    idade: 28,
    saudar() {
        return `Olá, meu nome é ${this.nome}`;
    },
};

console.log(pessoa.nome); // "Carlos"
console.log(pessoa.saudar()); // "Olá, meu nome é Carlos"
```

> A sintaxe `` `texto ${variavel}` `` é chamada de **template literal** e permite interpolar variáveis diretamente em strings.

## Promises e async/await

JavaScript é **single-threaded** — executa uma coisa por vez. Mas muitas operações do mundo real levam tempo: buscar dados de uma API, ler um arquivo, aguardar um timer. Para não travar a execução enquanto espera, JS usa um modelo **assíncrono**.

### O problema do código síncrono

Imagine buscar dados de um servidor de forma síncrona (bloqueante):

```javascript
// ⚠️ Hipotético — JS não funciona assim
const dados = buscarDaAPI(); // trava tudo até terminar
console.log(dados);
console.log("Isso só roda depois que a busca terminar");
```

Isso travaria o navegador inteiro enquanto aguarda a resposta. A solução são as **Promises**.

---

### Promise

Uma `Promise` representa um valor que **ainda não está disponível**, mas estará no futuro — ou falhará. Ela tem três estados:

| Estado      | Descrição             |
| ----------- | --------------------- |
| `pending`   | Aguardando resolução  |
| `fulfilled` | Concluída com sucesso |
| `rejected`  | Falhou com um erro    |

```javascript
const promessa = new Promise((resolve, reject) => {
    const sucesso = true;

    if (sucesso) {
        resolve("Operação concluída!");
    } else {
        reject("Algo deu errado.");
    }
});

promessa
    .then((resultado) => console.log(resultado)) // "Operação concluída!"
    .catch((erro) => console.error(erro));
```

O método `.then()` recebe o valor resolvido; `.catch()` captura erros. Encadear vários `.then()` era o padrão antigo — funciona, mas pode se tornar verboso. Para isso surgiu o `async/await`.

---

### async / await

`async/await` é uma sintaxe moderna que torna código assíncrono tão legível quanto código síncrono. Por baixo dos panos, ainda são Promises.

```javascript
// Uma função marcada com async sempre retorna uma Promise
async function buscarUsuario(id) {
    const resposta = await fetch(`https://api.exemplo.com/usuarios/${id}`);
    const dados = await resposta.json();
    return dados;
}
```

- **`async`** — marca a função como assíncrona
- **`await`** — pausa a execução _dentro da função_ até a Promise resolver, sem bloquear o restante do programa

### Tratando erros com try/catch

```javascript
async function buscarUsuario(id) {
    try {
        const resposta = await fetch(`https://api.exemplo.com/usuarios/${id}`);

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.error("Falha ao buscar usuário:", erro.message);
    }
}

buscarUsuario(1);
```

> `await` só pode ser usado **dentro** de funções marcadas com `async`. Tentar usá-lo fora disso gera um erro de sintaxe.

### Exemplo prático com a Fetch API

Um caso muito comum é consumir uma API pública:

```javascript
async function buscarPiada() {
    try {
        const resposta = await fetch("https://official-joke-api.appspot.com/random_joke");
        const piada = await resposta.json();

        console.log(`${piada.setup}`);
        console.log(`👉 ${piada.punchline}`);
    } catch (erro) {
        console.error("Não foi possível buscar a piada:", erro.message);
    }
}

buscarPiada();
```

### Executando Promises em paralelo

Quando você precisa aguardar múltiplas operações **independentes**, use `Promise.all` para executá-las ao mesmo tempo em vez de uma por vez:

```javascript
async function buscarDados() {
    // ✅ Executam em paralelo — mais rápido
    const [usuarios, produtos] = await Promise.all([
        fetch("/api/usuarios").then((r) => r.json()),
        fetch("/api/produtos").then((r) => r.json()),
    ]);

    console.log(usuarios, produtos);
}
```

> [!TIP]
> Se qualquer uma das Promises rejeitar, `Promise.all` rejeita imediatamente. Para casos onde você quer os resultados mesmo com falhas parciais, use `Promise.allSettled`.

---

## Recursos recomendados

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — a documentação mais completa e confiável
- [javascript.info](https://javascript.info) — tutorial moderno e detalhado (disponível em PT-BR)
- Console do navegador (F12) — seu melhor amigo para experimentar
