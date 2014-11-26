// References
/// <reference path="../../../typings/jest/jest.d.ts" />

jest.dontMock('assert');
jest.dontMock('../LLItem.js');

// Imports
import LLItem = require('../LLItem');

// Requires
var assert = require('assert');

describe('LLItem constructor', function () {
  it('should create an LLItem without a next item', function () {
    var item = new LLItem('item', null);
  });
  it('should create an LLItem with a next item', function () {
    var tail = new LLItem('tail', null);
    var middle = new LLItem('middle', tail);
    var head = new LLItem('head', middle);
    assert.equal(head.data, 'head');
    assert.equal(head.next, middle);
    assert.equal(middle.data, 'middle');
    assert.equal(middle.next, tail);
  });
});