/**
 * Created by ganemone on 11/18/14.
 */
interface IFib {
    fibonacci(n: number): number;
}

class Fib implements IFib {
    constructor() {}
    fibonacci(n: number) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
}

var fib = new Fib();

console.log('Fib of 0', fib.fibonacci(0));
console.log('Fib of 1', fib.fibonacci(1));
console.log('Fib of 2', fib.fibonacci(2));
console.log('Fib of 3', fib.fibonacci(3));
console.log('Fib of 4', fib.fibonacci(4));



