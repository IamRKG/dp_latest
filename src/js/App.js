import canvasEle from "../UI/canvasEle";

export default class App extends canvasEle {
  constructor() {
    super();
  }

  getContext() {
    try {
      const context = this.canvasTag.getContext("2d");
      return context;
    } catch (e) {
      throw new Error(e);
    }
  }

  rectangle(width, height) {
    const renderingContext2D = new Promise((resolve, reject) => {
      resolve(this.getContext());
      reject(this.getContext());
    });
    renderingContext2D
      .then(ctx2D => {
        ctx2D.rect(10, 20, width, height);
        ctx2D.fill();
      })
      .catch(error => {
        console.log(error);
      });
  }
}

const app = new App();
app.rectangle(100, 100);
