function getStatus(value) {
    return new Promise((resolve, reject) => {
        if (value) resolve('Sucesso!');
        else reject('Falha!');
    });
}

const promessas = [getStatus(false), getStatus(true), getStatus(true)];
Promise.allSettled(promessas)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// É retornado um array mais detalhado
// Ex:
// [
//    { status: 'rejected', reason: 'Falha!' },
//    { status: 'fulfilled', value: 'Sucesso!' },
//    { status: 'fulfilled', value: 'Sucesso!' }
// ]