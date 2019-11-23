import { ADD_DATA, REMOVE_DATA } from '../types';

import { defaultState } from '../initial-state';


export const todoReducer = (state = defaultState, action) => {
  switch(action.type){
    case ADD_DATA : 
    return {
      ...state,
      items : ["vashisht"]
    }
    case REMOVE_DATA : 
    
    return {
      ...state,
      items : []
    }
    default:
      return state;
  }
}