interface ILLItem {
  data:any
  next:LLItem
}

class LLItem implements ILLItem {
  data:any
  next:LLItem;
  constructor(data:any, next:LLItem) {
    this.data = data;
    this.next = next;
  }
  hasNext() {
    return (!!this.next)
  }
}

export = LLItem;