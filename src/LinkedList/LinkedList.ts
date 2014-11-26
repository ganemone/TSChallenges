import LLItem = require('./LLItem');

interface ILinkedList {
  insert:(data: LLItem) => any
  delete:(node: LLItem) => any
  head: LLItem
}

class LinkedList implements ILinkedList {
  head:LLItem;
  constructor(head:LLItem) {
    this.head = head;
  }
  private _getTail() {
    var current: LLItem = this.head;
    while(current.hasNext()) {
      current = current.next;
    }
    return current;
  }
  insert(data: any) {
    var tail: LLItem = this._getTail();
    tail.next = new LLItem(data, null);
  }
  delete(node: LLItem) {
    if (this.head === node) {
      return this._deleteHead();
    }

    var current: LLItem = this.head.next;
    var prev: LLItem = this.head;

    while(current.hasNext()) {
      if(current === node) {
        return this._delete(prev, current);
      }
      current = current.next;
      prev = prev.next;
    }
  }
  private _deleteHead() {
    this.head = this.head.next;
  }
  private _delete(prev: LLItem, node: LLItem) {
    prev.next = node.next;
  }
  contains(node:LLItem):Boolean {
    var current: LLItem = this.head;
    while (current.hasNext()) {
      if (current === node) {
        return true;
      }
    }
    return false;
  }
  containsData(data:any):Boolean {
    var current: LLItem = this.head;
    while (current.hasNext()) {
      if (current.data === data) {
        return true;
      }
    }
    return false;
  }
}

export = LinkedList;