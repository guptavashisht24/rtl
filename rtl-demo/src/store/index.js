import { createStore } from "redux";


import  { todoReducer } from "../reducer";
import { defaultState } from '../initial-state';


export default function configureStore() {
  const store = createStore(todoReducer, defaultState);
  return store;
}