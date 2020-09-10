import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import currentUser from "../../../alula-web/src/store/reducers/currentUser";

const initialState = {
  currentUser: {},
};

const store = createStore(initialState, composeWithDevTools());

export default store;
