import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

export const store = legacy_createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk)
    )
  );