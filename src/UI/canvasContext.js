export default class canvasEle {
  constructor() {
    this.canvasTag = document.createElement("canvas");
    document.body.appendChild(this.canvasTag);
  }

  getContext() {
    try {
      const context = this.canvasTag.getContext("2d");
      return context;
    } catch (e) {
      throw new Error(e);
    }
  }
}
