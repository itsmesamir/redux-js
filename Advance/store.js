import { createStore } from "./redux.js";
import { todoReducer } from "./reducers.js";

const store = createStore(todoReducer);

export default store;
