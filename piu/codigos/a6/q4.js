Promise.resolve(5)
    .then(res => res * 2)
    .then(res => res * 3)
    .then(res => console.log(res));
