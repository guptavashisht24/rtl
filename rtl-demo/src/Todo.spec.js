import React from 'react';
import { render, cleanup } from '@testing-library/react';
import "jest-dom/extend-expect";
import ConnectedTodo, { Todo } from './todo';
import { exportAllDeclaration } from '@babel/types';



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


