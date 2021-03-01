import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { assert } from 'console';

describe("this is a mock suite", () => {

  it("true is truthy", () => {
    expect(true).toBeTruthy();
  })

  it("false is falsy", () => {
    expect(false).toBeFalsy();
  })

})