import { SET_USER } from "./actions.js";

// Initial state
const initialUserState = {
  name: "Samir Alam",
};

// User reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

// Combine reducers (if you have multiple reducers)
const rootReducer = (state = {}, action) => ({
  user: userReducer(state.user, action),
});

export default rootReducer;
