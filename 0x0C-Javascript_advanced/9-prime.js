'use strict';
const countPrimeNumbers = function() {
    let len = 0;
    for (let i = 2 ; i < 101 ; i++) {
        for (let j = 0; j < i; j++) {
            if (!(i % j)) {
                len++;
            }
        }
    }
    return (len);
}
const beg = performance.now();
const len = countPrimeNumbers();
const end = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${end - beg} milliseconds.`);