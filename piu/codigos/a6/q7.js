function getStatus(id, value) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                if (value) resolve(`(${id}) Sucesso! :)`);
                else reject(`(${id}) Falh :(`);
            },
            Math.random() * 3 + 1000,
        );
    });
}

const promessas = [getStatus(1, true), getStatus(2, false), getStatus(3, true)];
Promise.any(promessas)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Apenas o 1 e o 3 serão mostrados
