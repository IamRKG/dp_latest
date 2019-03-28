import App from "./App";

jest.mock("./App");

beforeAll(() => {
  document.body.innerHTML = `<canvas id="appId"></canvas>`;

  App.mockImplementation(() => {
    const app_id = document.querySelector(`#appId`);
    return {
      context: app_id.getContext("2d")
    };
  });
});

it("should call app", () => {
  const app = new App();
  console.log(app);
  expect(app.context).toBeTruthy();
});
