# FastAPI

O **FastAPI** é um framework web moderno e rápido (de alto desempenho) para a construção de **APIs** baseado em **type hints** (anotações de tipo) em Python.

## Instalação

```bash
pip install fastapi uvicorn

# Execução
uvicorn main:app --reload
```

## Rotas

### Exemplo básico de rota

```python
from fastapi import FastAPI

app = FastAPI()


@app.get('/')
def home():
    return {'Hello': 'World'}
```

1. Importamos a classe `FastAPI` e a instanciamos na variável `app`.
2. Usamos o método `get` de `app` como decorador, para criar uma rota do tipo **GET** e definimos o endpoint, no caso, `/`
3. Criamos uma função que retorna um conteúdo, no exemplo retorna um dicionário

Pronto, dessa forma temos uma **API** extremamente simples.

### Rota dinâmica

Para criar rotas dinâmicas com **FastAPI** é bem simples. Vamos criar uma rota dinâmica para um nome de usuário

```python
...

@app.get('/{user_id}')
def get_user(user_id: int):
    ... # Código da função
    return {'user_id': user_id}
```

Ao buscarmos, por exemplo, por `/1`, o parâmetro `user_id` da função assumirá esse valor

> [!IMPORTANT]
> O **FastAPI** considera o tipo do parâmetro, ou seja, `user_id` por padrão será tratado como str, a menos que outro tipo seja especificado

### Query string (string de pesquisa)

Para usarmos strings de pesquisa é bem simples. Vamos criar um exemplo de paginação

```python
...

@app.get('/posts')
def get_posts(cursor: int, limit: int):
    ... # Código da função
    return {'posts': ['post 1', 'post 2']}
```

Ao buscarmos por `/posts?cursor=10&limit=10`, os parâmetros assumirão os respectivos valores
Caso os parâmetros não sejam obrigatórios, devemos defini-los como opcionais com valores padrão

```python
from typing import Optional

...

@app.get('/posts')
def get_posts(cursor: Optional[int] = None, limit: int = 10):
    ... # Código da função
    return {'cursor': cursor, 'limit': limit}
```

## Documentação automática

Um ponto muito importante que faz o **FastAPI** brilhar é a documentação automática. E para acessar é bem simples

- `http://localhost:8000/docs`
- `http://localhost:8000/redoc`

Pronto.

## Fonte

- [Documentação do **FastAPI**](https://fastapi.tiangolo.com/learn/)
