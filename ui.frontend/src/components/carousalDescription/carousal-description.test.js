import React from 'react';
import CarousalDescription from './index';
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'

describe('DSTGridviewMicroFE test', () => {
  let renderedElem

  beforeEach(() => {
    renderedElem = render(<CarousalDescription />);
  });

  afterEach(() => {
    cleanup();
  })

  it('should match Snapshot', async () => {
    expect(renderedElem).toMatchSnapshot('s1');
  });

  it('should test readText click options', async () => {    
    expect(screen.getByTestId("read-more")).toBeInTheDocument(); 
    fireEvent.click(screen.getByTestId("read-more")); 
    expect(renderedElem).toMatchSnapshot('s2');
    expect(screen.getByTestId("read-less")).toBeInTheDocument(); 
    fireEvent.click(screen.getByTestId("read-less")); 
    expect(renderedElem).toMatchSnapshot('s3');
    expect(screen.getByTestId("read-more")).toBeInTheDocument(); 
  });
});