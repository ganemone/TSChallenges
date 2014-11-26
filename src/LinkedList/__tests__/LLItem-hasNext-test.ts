// References
/// <reference path="../../../typings/jest/jest.d.ts" />

jest.dontMock('assert');
jest.dontMock('../LLItem.js');

// Imports
import LLItem = require('../LLItem');

// Requires
var assert = require('assert');

describe('LLItem hasNext', function() {
  it('should work when there is a next item', function() {
    var next = new LLItem('someitem', null);
    var item = new LLItem('item', next);
    assert.equal(item.hasNext(), true);
  });
  it('should work when there is not a next item', function() {
    var item = new LLItem('item', null);
    assert.equal(item.hasNext(), false);
  });
  it('should work in a chain of items', function() {
    var tail = new LLItem('tail', null);
    var middle = new LLItem('middle', tail);
    var head = new LLItem('head', middle);
    assert.equal(head.hasNext(), true);
    assert.equal(middle.hasNext(), true);
    assert.equal(tail.hasNext(), false);
  });
});