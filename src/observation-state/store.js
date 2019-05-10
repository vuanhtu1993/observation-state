export default class Store {
  constructor(data = {}) {
    this.data = data;
    this.stack = []
  }

  subscribe(setState) {
    this.stack.push(setState)
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
    this.stack.forEach(cb => cb())
  }
}
