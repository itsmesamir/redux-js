import { createStore } from "./redux.js";
import rootReducer from "./reducers.js";

export const store = createStore(rootReducer);
