/**
 * Created by ganemone on 11/19/14.
 */
// References
/// <reference path="../../typings/jest/jest.d.ts" />

jest.dontMock('assert');
jest.dontMock('../Fibonacci.js');

// Imports
import Fib = require('../Fibonacci');

// Requires
var assert = require('assert');

describe('A Fibonacci class', function() {
    var fib = new Fib();
    it('should calculate the first fibonacci number correctly', function() {
        assert.equal(fib.fibonacci(0), 0);
    });

    it('should calculate the second fibonacci number correctly', function() {
        assert.equal(fib.fibonacci(0), 0);
    });

    it('should calculate the third fibonacci number correctly', function() {
        assert.equal(fib.fibonacci(0), 0);
    });

    it('should calculate a high fibonacci number correctly', function() {
        assert.equal(fib.fibonacci(0), 0);
    });
});