import { ADD_DATA, REMOVE_DATA } from '../types';

export const addItem = data => {
  return {
    type : ADD_DATA,
    payload : data
  }
}


export const removeItem = () => {
  return {
    type : REMOVE_DATA,
    payload : ''
  }
}


