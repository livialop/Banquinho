# Flask-SQLAlchemy

O **Flask-SQLAlchemy** é uma biblioteca que integra a manipulação do banco de dados, por parte do [`SQLAlchemy`](SQLAlchemy.md), com a sua aplicação [`Flask`](../flask/flaskintroducao.md).

> [!NOTE]
> É interessante que tenha lido a wiki sobre `SQLAlchemy`, para não ficar perdido 😉

## Como instalar

```sh
pip install flask-sqlalchemy
```

## Configurações iniciais

Assim como no `SQLAlchemy`, era preciso fazer algumas configurações, no `Flask-SQLAlchemy` também é preciso, porém muito menos.

```python
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()
```

Pronto. Basta isso para que seja possível a criação e manipulação do banco.

Para exemplo, vamos fazer uma classe usuário juntamente com o [`Flask-Login`](../flask/flask-login.md), por isso a importação.

```python
class Usuario(db.Model, UserMixin):
    __tablename__ = 'usuarios'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    nome = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    senha = db.Column(db.String(100), nullable=False)
```

> [!IMPORTANT]
> A classe base `UserMixin` precisa de um atributo `id`, não pode ser outro nome.

Perceba que `db` contém tudo que vamos precisar para a criação e manipulação do banco.

Esse usuário vai servir tanto para o banco de dados, como para a manipulação das informações durante a execução da aplicação. Isso só será possível graças a herança em diamante.

> [!NOTE]
> Outras classes não precisam do `UserMixin`.

## Integrando com o `Flask`

Agora vamos juntar as configurações que fizemos com a nossa aplicação. Vamos fazer uma simples apenas para servir de exemplo.

### Configurações

```python
from flask import Flask


app = Flask(__name__)
app.secret_key = 'uytghbjniy65drtxfxres56r7ghuoij97drxcv'

# Configuração do LoginManager...

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
```

Ótimo, essa é uma aplicação simples, mas já serve para vermos o potencial do `Flask-SQLAlchemy`. Agora vamos entender linha por linha.

```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
```

Essa linha de configuração serve para indicar a URL do banco. Assim como na wiki sobre `SQLAlchemy`, nós usamos um banco `SQLite`, por ser leve e não precisar de servidor, vamos usar aqui também.

```python
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
```

Essa linha serve para desativar o sistema de rastreamento de modificações de objetos, ela consome memória extra, por isso foi desativada.

```python
db.init_app(app)
```

Essa linha é a principal, ela liga o responsável pela manipulação do banco com o `app` da nossa aplicação.

### Criando o banco

Agora vamos criar o banco com as tabelas.

```python
with app.app_context():
    db.create_all()
```

Simples assim.

---

Agora é importante lembrar que os dados não serão mais guardados numa lista, session ou que estiver usando antes, mas sim num banco de dados. Ou seja, todas as operações devem ser realizadas por ele.

## `Flask-SQLAlchemy` VS `SQLAlchemy`

Por mais que um seja derivado do outro e tenha diversas coisas em comum, algumas operações são ligeiramente diferentes.

## CRUD

### Create (Criar)

Para criar é bem simples, e bem parecido com o `SQLAlchemy`.

```python
novo_usuario = Usuario(nome='Fulano', email='fulano@email.com', senha='senha123')
db.session.add(novo_usuario)
db.session.commit()
```

### Read (Ler)

Para fazer uma consulta a única coisa que muda é a sintaxe, mas a lógica é a mesma.

- Selecionar todos [`select * from usuarios`]:

    ```python
    usuario = Usuario.query.all()
    ```

- Selecionar por uma condição [`select * from usuarios where nome = 'Fulano'`]:

    ```python
    usuario = Usuario.query.filter_by(nome='Fulano').first()
    ```

- Selecionar pelo ID [`select * from usuarios where id = 1`]:

    ```python
    usuario = db.session.get(Usuario, 1)
    ```

### Update (Atualizar)

Assim como no `SQLAlchemy`, vamos precisar pegar a informação que desejamos alterar.

```python
usuario = Usuario.query.filter_by(nome='Fulano').first()
usuario.nome = 'Zefa'
db.session.commit()
```

### Delete (Apagar)

Aqui também é preciso pegar o usuário para apagá-lo.

```python
usuario = db.session.get(Usuario, 1)
db.session.delete(usuario)
db.session.commit()
```

## Referências

- [Flask-SQLAlchemy](https://flask-sqlalchemy.readthedocs.io/en/stable/)
