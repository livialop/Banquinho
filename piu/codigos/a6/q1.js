function getStatus(value) {
    return new Promise((resolve, reject) => {
        if (value) resolve('Sucesso!');
        else reject('Falha!');
    });
}

getStatus(true)
    .then(res => console.log(res))
    .then(err => console.log(err));
