import Header from "./components/Header.js";

const router = async () => {
 const header = document.getElementById("header");
  header.innerHTML = await Header.render();
  await Header.after_render();
};
window.addEventListener("load", router);
window.addEventListener("hashchange", router);