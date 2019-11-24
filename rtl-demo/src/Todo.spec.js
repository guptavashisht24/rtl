import React from 'react';
import { render, cleanup } from '@testing-library/react';
import "jest-dom/extend-expect";
import ConnectedTodo, { Todo } from './todo';



describe('Tests without connection', ()=>{
  afterEach(cleanup);

  it('has add button',()=>{
    const { getByText } = render(<Todo items = {[]}/>)
    getByText('ADD')
  })

  it('has remove button',()=>{
    const { getByText } = render(<Todo items = {[]}/>)
    getByText('REMOVE')
  })
  
})


