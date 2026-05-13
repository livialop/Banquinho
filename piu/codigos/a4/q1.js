function parOuImpar(array) {
    array.forEach(num => {
        console.log(`${num} é ${num % 2 === 0 ? 'par' : 'ímpar'}`);
    });
}

parOuImpar([1, 2, 5, 6, 0]);
