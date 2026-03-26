# Subconsulta

Uma **subconsulta** consiste em realizar pequenas consultas dentro de outras, com o fim de facilitar e selecionar informações.

> [!IMPORTANT]
> Nem todas as tarefas podem ser solucionadas com subconsultas, ou seja, ela não substitui o `JOIN`, mas vale apenas aprender 😉

## Exemplos

Para exemplificar, vamos criar duas tabelas, uma de produtos e outra de categorias, onde cada produto pertence à uma categoria.

**produtos**:

| id | nome        | preco | categoria_id |
|----|-------------|-------|--------------|
| 1  | Teclado     | 150   | 1            |
| 2  | Mouse       | 80    | 1            |
| 3  | Caderno     | 20    | 2            |
| 4  | Lápis       | 3     | 2            |

**categorias**:

| id | categoria      |
|----|----------------|
| 1  | Eletrônicos    |
| 2  | Papelaria      |

### 1. Exemplo

Vamos pegar os produtos da categoria **Eletrônicos**. Com o `JOIN` a consulta seria assim:

```sql
SELECT * FROM produtos
JOIN categorias ON produtos.categoria_id = categorias.id
WHERE categorias.categoria = "Eletrônicos";
```

Agora, vamos fazer essa mesma operação com subconsultas:

```sql
SELECT * FROM produtos
WHERE produtos.categoria_id = (
    SELECT id FROM categorias
    WHERE categorias.categoria = "Eletrônicos"
);
```

Agora vamos analisar essa operação. Perceba que a subconsulta está separada entre parênteses e fornecendo valores para o `WHERE` de produtos.

## 2. Exemplo

Agora vamos fazer diferente, porém bem comum. Vamos pegar todos os produtos da mesma categoria de **Teclado**. A consulta ficaria assim.

```sql
SELECT * FROM produtos
WHERE produtos.categoria_id = (
    SELECT produtos.categoria_id FROM produtos
    WHERE produtos.nome = "Teclado"
);
```

É, isso é legal. É possível fazer essa operação sem "sair" da tabela de produtos.

## 3. Exemplo

Nos exemplos anteriores, as subconsultas retornavam um único valor. Porém vamos fazer diferente. Como último exemplo, vamos selecionar os produtos que pertencem às categorias **Eletrônicos** ou **Papelaria**.

```sql
SELECT * FROM produtos
WHERE categoria_id IN (
    SELECT id FROM categorias
    WHERE categoria IN ("Eletrônicos", "Papelaria")
);
```

O detalhe que diferencia dos demais exemplos é uma coisa que pode causar muito problema. A subconsulta está selecionando mais de uma categoria, mais de um id, ou seja, retornando mais de um id. Por isso o uso no `IN`, dessa forma, a consulta principal considerará mais de um id retornado.
