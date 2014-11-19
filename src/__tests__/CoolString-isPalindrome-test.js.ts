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


describe('CoolString isPalindrome', () => {

    describe('when true', () => {

        it('should work with a single character', () => {
            var s = new CoolString('a');
            assert.equal(s.isPalindrome(), true);
        });

        it('should work with a two character string', () => {
            var s = new CoolString('aa');
            assert.equal(s.isPalindrome(), true);
        });

        it('should work with a three character string', () => {
            var s = new CoolString('aoa');
            assert.equal(s.isPalindrome(), true);
        });

        it('should work with a large even number string', () => {
            var s = new CoolString('abuttuba');
            assert.equal(s.isPalindrome(), true);
        });

        it('should work with a large odd number string', () => {
            var s = new CoolString('racecar');
            assert.equal(s.isPalindrome(), true);
        });
    });

    describe('when false', () => {
        it('should return false for a two character string', () => {
            var s = new CoolString('ab');
            assert.equal(s.isPalindrome(), false);
        });

        it('should return false for a three character string', () => {
            var s = new CoolString('aab');
            assert.equal(s.isPalindrome(), false);
        });

        it('should return false for a large even number string', () => {
            var s = new CoolString('aabedasdfhde');
            assert.equal(s.isPalindrome(), false);
        });

        it('should return false for a large odd number string', () => {
            var s = new CoolString('aaasdfbdsasdfvhds');
            assert.equal(s.isPalindrome(), false);
        });
    });
});
