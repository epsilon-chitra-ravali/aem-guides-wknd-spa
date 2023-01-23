import React from 'react';
import HomeCarousel from './index';
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'

describe('DSTGridviewMicroFE test', () => {
  let renderedElem

  beforeEach(() => {
    renderedElem = render(<HomeCarousel />);
  });

  afterEach(() => {
    cleanup();
  })

  it('should match Snapshot', async () => {
    expect(renderedElem).toMatchSnapshot('s1');
  });

  it('should test on carousal click options', async () => {    
    const handleSelect = screen.getByLabelText("Slide 3"); 
    expect(handleSelect).toBeInTheDocument(); 
    fireEvent.click(handleSelect); 
    expect(renderedElem).toMatchSnapshot('s2');
  });
});