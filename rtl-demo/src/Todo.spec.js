import React from 'react';
import { render, cleanup } from '@testing-library/react';
import "jest-dom/extend-expect";
import ConnectedTodo, { Todo } from './todo';
import { exportAllDeclaration } from '@babel/types';
import { ADD_DATA, REMOVE_DATA } from './types';

import {addItem, removeItem} from "./actions";

import { todoReducer } from './reducer';

import { defaultState } from './initial-state';







describe('Tests without connection', ()=>{
  afterEach(cleanup);

  it('matches snapshot',()=>{
    const { asFragment } = render(<Todo items = {[]}/>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('has add button',()=>{
    const { getByText } = render(<Todo items = {[]}/>)
    getByText('ADD')
  })

  it('has remove button',()=>{
    const { getByText } = render(<Todo items = {[]}/>)
    getByText('REMOVE')
  })

  it('has remove button',()=>{
    const { getByText } = render(<Todo items = {[]}/>)
    getByText('REMOVE')
  })

  it('has list with 0 element',()=>{
    const { getByTestId } = render(<Todo items = {[]}/>)
    const todoList = getByTestId("todos-ul")
    expect(todoList.children.length).toBe(0)
  })
  
})


describe('Redux Testing', ()=>{
  afterEach(cleanup);

  describe("Action Testing",()=>{

    it("Create expected action for addItem", ()=>{
      const expectedAction = {
        type : ADD_DATA,
        payload : "vashisht"
      }
      expect(addItem("vashisht")).toEqual(expectedAction)
    })
  
    it("Create expected action for removeItem", ()=>{
      const expectedAction = {
        type : REMOVE_DATA,
        payload : "",
      }
      expect(removeItem()).toEqual(expectedAction)
    })

  })

  describe("Reducer Testing", ()=>{
    it('Reducer returns initial State',()=>{
      expect(todoReducer(undefined, {})).toEqual(defaultState)
    })

    it('Reducer returns initial State',()=>{
      expect(todoReducer(defaultState, addItem("vashisht"))).toEqual({
        items : ["vashisht"]
      })
    })

    it('Reducer returns initial State',()=>{
      expect(todoReducer(defaultState, removeItem())).toEqual({
        items : []
      })
    })
  })
  
})


