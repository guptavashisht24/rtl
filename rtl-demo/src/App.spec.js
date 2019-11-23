import React from 'react';
import { render, cleanup } from '@testing-library/react';
import "jest-dom/extend-expect";
import App from './App';

afterEach(cleanup);

it('matches snapshots', ()=>{
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot();
})
