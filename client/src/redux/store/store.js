import { createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/reducers.js";


import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;