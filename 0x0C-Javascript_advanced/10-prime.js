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
let len;
for (let i = 0 ; i < 100; i++)
len = countPrimeNumbers();
const end = performance.now();
console.log(`time of calculating prime numbers 100 times was ${end - beg} milliseconds.`);