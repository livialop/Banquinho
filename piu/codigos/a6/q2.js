function verificarPositivo(num) {
    return new Promise((resolve, reject) => {
        if (typeof num !== 'number') reject(`Tipo ${typeof num} não é number.`);
        if (num < 0) reject(`O valor ${num} deveria ser maior que 0`);
        resolve();
    });
}

verificarPositivo(5)
    .then(res => console.log(res))
    .catch(err => console.log(err));
