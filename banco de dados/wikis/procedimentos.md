# Procedimentos

Um procedimento em **MySQL** serve para resolver tarefas específicas em uma base de dados, podendo ser chamado várias vezes. Diferentemente das funções, não é obrigatório o retorno de valores.

> [!TIP]
> Não é obrigatório, mas é interessante ter visto o material sobre [funções](./funcoes.md)

## Criando um procedimento

Vamos criar um procedimento de exemplo que soma 2 valores e exibe o resultado.

```sql
DELIMITER $

CREATE PROCEDURE soma(IN num1 INT, IN num2 INT)
BEGIN
    SELECT (num1 + num2);
END$

DELIMITER ;
```

No cabeçalho é criado o procedimento indicando o nome e seus parâmetros. Cada parâmetro é preciso indicar o **MODO**, o **NOME** e o **TIPO**

```sql
CREATE PROCEDURE soma(IN num1 INT, IN num2 INT)
```

| Modo    | Função                                                                                  |
| ------- | --------------------------------------------------------------------------------------- |
| `IN`    | Esse é o valor padrão, então não precisa especificar. Ele serve para receber os valores |
| `OUT`   | Ele serve para retorna valores após alguma operação atribuindo a alguma variável        |
| `INOUT` | Este modo é um misto dos dois anteriores, tanto recebe valores como retorna eles        |

E para chamar um procedimento é bem simples.

```sql
call soma(3, 9);
```

## Exemplos

Peguei alguns exercícios para resolver 🙃.

### 1. Exemplo

Receba uma temperatura em Celsius (`IN`) e exiba a conversão para Fahrenheit.

```sql
CREATE PROCEDURE convert_to_fahrenheit(celsius FLOAT)
BEGIN
    SELECT (celsius * 1.8 + 32);
END$
```

### 2. Exemplo

Crie uma procedure que receba um número (`IN`) e retorne o quadrado via (`OUT`).

```sql
CREATE PROCEDURE quadrado(num INT, OUT resultado INT)
BEGIN
    SET resultado = num * num;
END$
```

> [!NOTE]
> Ao usar o `OUT` como modo de um parâmetro não é preciso declarar uma variável, ele assume esse papel.

### 3. Exemplo

Receba um valor via (`INOUT`) e altere o próprio valor para o dobro.

```sql
CREATE PROCEDURE dobro(INOUT num INT)
BEGIN
    SET num = num * 2;
END$
```
