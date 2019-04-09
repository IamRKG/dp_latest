import canvasEle from "../UI/canvasContext";

export default class App extends canvasEle {
  constructor() {
    super();
  }

  baseRectangle(width, height) {
    const renderingContext2D = new Promise((resolve, reject) => {
      resolve(this.getContext());
      reject(this.getContext());
    });
    renderingContext2D
      .then(ctx2D => {
        ctx2D.beginPath();
        ctx2D.strokeRect(10, 20, width, height);
        ctx2D.strokeStyle = "#000";
        ctx2D.fillStyle = "#fff";
        ctx2D.fill();
        ctx2D.closePath();
      })
      .catch(error => {
        console.log(error);
      });
  }

  line() {}
}

const app = new App();
app.baseRectangle(100, 100);
