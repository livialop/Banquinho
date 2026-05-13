function getStatus(id, value) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                if (value) resolve(`(${id}) Sucesso! :)`);
                else reject(`(${id}) Falha :(`);
            },
            Math.random() * 3 + 1000,
        );
    });
}

const promessas = [getStatus(1, true), getStatus(2, false), getStatus(3, true)];
Promise.race(promessas)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Com o race tanto o resolve quanto o reject são executados
