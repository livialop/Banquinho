# Blueprint

**Blueprint** é um sistema do próprio `Flask` para modularização, separação e organização da aplicação. Ele é útil quando a aplicação está começando a ficar muito grande e quase impossível de entender ou acompanhar.

## Como funciona?

Ele consiste em criar pequenas aplicações que serão acopladas à aplicação principal.

## Modularizando a autenticação

Vamos supor que está ficando muito desorganizado, e você deseja deslocar as rotas responsáveis pela autenticação para outro lugar.

Vamos seguir a seguinte estrutura.

```sh
Projeto/
│   app.py
└───auth/
        routes.py
```

No arquivo `auth/routes.py` vamos adicionar o **Blueprint**

```python
from flask import Blueprint


auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/login')
def login():
    ...


@auth_bp.route('/register')
def register():
    ...
```

Perceba que, dentro do módulo, usamos o **Blueprint** no lugar do `Flask` para registrar as rotas. Depois, o **Blueprint** é conectado ao `app` principal. Outro ponto a se prestar atenção é que o **Blueprint** recebeu um nome, isso serve para o `Flask` identificar as rotas durante a execução.

Agora vamos ao arquivo principal (`app.py`) e adicionar o **Blueprint**.

```python
from flask import Flask
from auth.routes import auth_bp


app = Flask(__name__)
app.register_blueprint(auth_bp)
```

Pronto. A autenticação foi modularizada.

## Redirecionamento

Você se lembra que o **Blueprint** recebeu um nome? Esse nome também serve para indicar onde as rotas estão durante o redirecionamento.

```python
return redirect(url_for('auth.login'))
```

Nesse exemplo, a URL foi indicada de uma forma diferente. Primeiro indico o nome do **Blueprint** (`auth`) e depois a rota (`login`), separado por ponto. Isso serve para o `Flask` "saber" onde procurar a rota `login` mesmo que a rota seja simplesmente `/login`

## Referências

- [Flask](https://flask.palletsprojects.com/en/stable/api/#flask.Blueprint)
