import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import usersReducer from "../store/reduсers";
import usersSaga from "./sagas";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [saga],
});

saga.run(usersSaga);
