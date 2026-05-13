function esperar(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Terminou!');
        }, ms);
    });
}

const tempo = 1000; // 1s

esperar(tempo).then(res => console.log(res));

console.log(`Esperando ${tempo}ms...`);

// O console.log aparece antes da promise, mesmo estando após a chamda da função esperar
