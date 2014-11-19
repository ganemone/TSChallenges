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

export = Fib;



