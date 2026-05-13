const parOuImparArrow = (array) => {
    array.forEach(num => {
        console.log(`${num} é ${num % 2 === 0 ? 'par' : 'ímpar'}`);
    });
};
