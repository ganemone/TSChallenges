interface INode {
  data:any
  next:Node
}

interface ILinkedList {
  insert:(data: any) => any
  delete:(node: Node) => any
  head: Node
}

class Node implements INode {
  data:any;
  next:Node;
  constructor(data:any, next:Node) {
    this.data = data;
    this.next = next;
  }
  hasNext() {
    return (!!this.next)
  }
}

class LinkedList implements ILinkedList {
  head:Node;
  constructor(head:Node) {
    this.head = head;
  }
  private _getTail() {
    var current: Node = this.head;
    while(current.hasNext()) {
      current = current.next;
    }
    return current;
  }
  insert(data: any) {
    var tail: Node = this._getTail();
    tail.next = new Node(data, null);
  }
  delete(node: Node) {
    if (this.head === node) {
      return this._deleteHead();
    }

    var current: Node = this.head.next;
    var prev: Node = this.head;

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
  private _delete(prev: Node, node: Node) {
    prev.next = node.next;
  }
  contains(node:Node):Boolean {
    var current: Node = this.head;
    while (current.hasNext()) {
      if (current === node) {
        return true;
      }
    }
    return false;
  }
  containsData(data:any):Boolean {
    var current: Node = this.head;
    while (current.hasNext()) {
      if (current.data === data) {
        return true;
      }
    }
    return false;
  }
}
