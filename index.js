import { store } from "./store.js";
import { setUser } from "./actions.js";

const userNameElement = document.getElementById("user-name");
const changeNameButton = document.getElementById("change-name");

const render = () => {
  const state = store.getState();
  userNameElement.textContent = `User Name: ${state.user.name}`;
};

render();

store.subscribe(render);

changeNameButton.addEventListener("click", () => {
  store.dispatch(setUser({ name: "Updated Name" }));
});
