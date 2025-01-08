import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  console.log("ParseURL: " + parseUrl);

  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.querySelector("#main-container");
  main.innerHTML = await screen.render();
};

window.addEventListener("load", router);

window.addEventListener("hashchange", router);
