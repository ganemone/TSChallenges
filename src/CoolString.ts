/**
 * Created by ganemone on 11/18/14.
 */

interface ICoolString {
    data: string
    eachCharFromBothEnds(cb:ICoolStringCB)
    eachIndexFromBothEnds(cb:IIndexEachCB)
    reverse(): void
    reverseInPlace(): void
    isPalindrome(): boolean
    print(): void
}

interface ICoolStringCB {
    (left: string, right: string): boolean
}

interface IIndexEachCB {
    (left: number, right: number): boolean
}

class CoolString implements ICoolString {
    public data;
    constructor(data: string) {
        this.data = data;
    }
    eachCharFromBothEnds(cb:ICoolStringCB) {
        this.eachIndexFromBothEnds((start:number, end:number) => {
            return cb(this.data.charAt(start), this.data.charAt(end));
        });
    }
    eachIndexFromBothEnds(cb:IIndexEachCB) {
        var start = 0;
        var end = this.data.length - 1;
        while (start < this.data.length / 2 && start !== end) {
            if(!cb(start, end)) {
                return;
            }
            start++;
            end--;
        }
    }
    reverse() {
        var reversed = [];
        for (var i = this.data.length - 1; i >= 0; i--) {
            reversed.push(this.data.charAt(i));
        }
        this.data = reversed.join('');
    }
    reverseInPlace() {
        var dataArr = this.data.split('');

        this.eachIndexFromBothEnds((start:number, end:number) => {
            var tmpEnd = dataArr[end];
            dataArr[end] = dataArr[start];
            dataArr[start] = tmpEnd;
            // Retuning true continues iteration
            return true;
        });

        this.data = dataArr.join('');
    }
    isPalindrome():boolean {
        var isPalindrome:boolean = true;
        this.eachCharFromBothEnds((left:string, right:string):boolean => {
            if (left !== right) {
                isPalindrome = false;
                // Returning false quits the iteration early
                return false;
            }
            // Returning true continues the iteration
            return true;
        });
        return isPalindrome;
    }
    print() {
        console.log(this.data);
    }
}

var coolString = new CoolString('LOL THIS SHOULD WORK');
console.log('Original');
coolString.print();
coolString.reverse();
console.log('Reversed');
coolString.print();
coolString.reverseInPlace();
console.log('Re-Reversed in Place');
coolString.print();

console.log('Should be false: ', coolString.isPalindrome());

coolString = new CoolString('LOL');

console.log('Should be true: ', coolString.isPalindrome());

coolString = new CoolString('racecar');

console.log('Should be true: ', coolString.isPalindrome());

coolString = new CoolString('LooL');

console.log('Should be true: ', coolString.isPalindrome());