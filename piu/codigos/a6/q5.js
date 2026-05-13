function getStatus(value) {
    return new Promise((resolve, reject) => {
        if (value) resolve('Sucesso!');
        else reject('Falha!');
    });
}

const promessas = [getStatus(false), getStatus(true), getStatus(true)];
Promise.all(promessas)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Caso uma das promessas receba false a resposta geral será "Falha!", caso constrário, todos recebem true, será retornada um array com 3 "Sucesso!"
