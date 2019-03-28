export default class canvasEle {
  constructor() {
    this.canvasTag = document.createElement("canvas");
    document.body.appendChild(this.canvasTag);
  }
}
