# Questões

**Q1** – É comum em JavaScript os desenvolvedores usarem constantes para representar objetos e listas. Veja o exemplo abaixo.

```javascript
const pessoa = {
    nome: 'Manoel',
    idade: 65
}
console.log(pessoa.nome, pessoa.idade)

pessoa.nome = 'Anderson',
pessoa.idade = 35
console.log(pessoa.nome, pessoa.idade)
```

Por que é possível alterar o nome e a idade do objeto pessoa mesmo ele tendo sido declarado como uma constante? (responda em um `.txt`)

**Q2** – Apesar de ser um conceito antigo e com alternativas mais familiares a programadores de linguagens orientadas a objeto como Java ou Python, é comum ainda encontrar código JavaScript que usa funções construtoras.
Sendo assim, crie uma função construtora Pessoa(nome, idade) que cria objetos com as propriedades nome, idade e um método `apresentar()` que retorna "Olá, meu nome é [nome] e tenho [idade] anos". Instancie duas pessoas e exiba suas apresentações.

**Q3** – Funções construtoras são um pouco feias, porém mais feio do que elas é criar objetos usando protótipos. Mas você também precisa saber que isso existe, pois pode se deparar com código escrito assim. Então crie um objeto protótipo animalProto com a propriedade grupo e um método `descrever()` que retorna "Este(a) é um(a) [grupo]". Em seguida, use `Object.create()` para criar dois objetos: um peba com grupo = "mamífero" e uma arribaca com grupo = "ave". Chame o método `descrever()` para cada um.

**Q4** – Finalmente chegamos à sintaxe mais comum de declaração e instanciação de classes. Também não é a coisa mais linda que a humanidade já criou, mas é o que temos. Ou talvez eu só esteja sendo chato porque não sei fazer melhor. Enfim… declare uma classe (usando `class`) chamada Retangulo com um construtor que recebe altura e largura e os armazena como propriedades da instância. Adicione um método `area()` que retorna o produto de altura * largura. Instancie um retângulo e exiba sua área.

**Q5** – Crie uma classe Funcionario com:

- Campos privados `#nome`, `#salarioBase`.
- Construtor que recebe nome e salário base.
- Método privado `#calcularBonus()` que retorna 10% do salário base.
- Método público `salarioTotal()` que retorna a soma do salário base com o bônus (usando o método privado).

Instancie um funcionário e exiba o salário total. Apenas para testar, tente acessar o campo `#nome` diretamente fora da classe e observe o erro.

**Q6** – Crie uma classe ContaBancaria com:

- Uma propriedade privada `#saldo` (inicializada em 0)
- Um método get para o saldo que retorna o valor formatado como "R$ X,XX".
- Um método set para o saldo que só permite valores não negativos (lança erro se negativo).

Teste: deposite 100 reais, tente definir saldo negativo e veja o comportamento.

**Q7** – Crie uma classe base Animal com propriedade nome e método `falar()` que retorna "[nome] emitiu um som.". Em seguida, crie uma classe Cachorro que herda de Animal, chama super no construtor e sobrescreve o método `falar()` para retornar "[nome] latiu: Au au!". Faça o mesmo para a classe BemTeVi. Instancie um cachorro e um bem-te-vi e chame o método `falar()` em ambos.

**⭐ Q8** – Projeto Prático: Batalha de Monstros (Nessa o GPT pegou pesado, nem eu sei fazer. Se você conseguir responder, vale por toda a lista.)

Crie um pequeno sistema de batalha por turnos:

1. Classe base Personagem com:
Atributos nome, `#vida` e `#ataque`
Método `receberDano(valor)` que reduz a vida pelo valor (não permitindo valores negativos).
Método `estaVivo()` que retorna true se vida > 0.
Método `atacar(alvo)` que causa dano (usando `#ataque`) ao alvo.
2. Classe Guerreiro que herda de Personagem e:
Adiciona um atributo `#escudo` que concede um bônus de defesa.
Sobrescreve `receberDano(valor)` para reduzir o dano pelo valor do escudo.
3. Classe Mago que também herda de Personagem e:
Adiciona um atributo magia.
Adiciona um método `lancarFeitico(alvo)` que causa dano extra (dobro do ataque) se tiver magia suficiente.
4. Simulação: Crie um guerreiro e um mago, faça-os lutar até a morte (cada um ataca o outro uma vez por turno) e exiba o status (nome e vida restante) a cada turno. No final, exiba o vencedor.
