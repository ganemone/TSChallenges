/**
 * Created by ganemone on 11/18/14.
 */

// References
/// <reference path="../../typings/jest/jest.d.ts" />

jest.dontMock('assert');
jest.dontMock('../CoolString.js');

// Imports
import CoolString = require('../CoolString');

// Requires
var assert = require('assert');

describe('CoolString reverse function', () => {
    it('should reverse a 1 character string correctly', () => {
        var s: CoolString = new CoolString('a');
        s.reverse();
        assert.equal(s.data, 'a');
    });
    it('should reverse a 2 character string correctly', () => {
        var s: CoolString = new CoolString('ab');
        s.reverse();
        assert.equal(s.data, 'ba');
    });
    it('should reverse a 3 character string correctly', () => {
        var s: CoolString = new CoolString('abc');
        s.reverse();
        assert.equal(s.data, 'cba');
    });
    it('should reverse a 4 character string correctly', () => {
        var s: CoolString = new CoolString('abcd');
        s.reverse();
        assert.equal(s.data, 'dcba');
    });
    it('should reverse a 5 character string correctly', () => {
        var s: CoolString = new CoolString('abcde');
        s.reverse();
        assert.equal(s.data, 'edcba');
    });
});