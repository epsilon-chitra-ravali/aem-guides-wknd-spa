import React from 'react';
import Header from './Header';
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'

describe('DSTGridviewMicroFE test', () => {
  let renderedElem

  beforeEach(() => {
    renderedElem = render(<Header />);
  });

  afterEach(() => {
    cleanup();
  })

  it('should match Snapshot', async () => {
    expect(renderedElem).toMatchSnapshot('s1');
  });

  it('should test destinations button click options', async () => {    
    const destinationsButton = screen.getByTestId("destinations"); 
    expect(destinationsButton).toBeInTheDocument(); 
    fireEvent.click(destinationsButton); 
    expect(renderedElem).toMatchSnapshot('s2');
    const destinationsOptions = screen.getByTestId("destinations-options"); 
    expect(destinationsOptions).toBeInTheDocument(); 
  });

  it('should test experiences button click options', async () => {    
    const experiencesButton = screen.getByTestId("experiences"); 
    expect(experiencesButton).toBeInTheDocument(); 
    fireEvent.click(experiencesButton); 
    expect(renderedElem).toMatchSnapshot('s2');
    const experiencesOptions = screen.getByTestId("experiences-options"); 
    expect(experiencesOptions).toBeInTheDocument(); 
  });

  it('should test travel button click options', async () => {    
    const travelButton = screen.getByTestId("travel"); 
    expect(travelButton).toBeInTheDocument(); 
    fireEvent.click(travelButton); 
    expect(renderedElem).toMatchSnapshot('s2');
    const travelOptions = screen.getByTestId("travel-options"); 
    expect(travelOptions).toBeInTheDocument(); 
  });
});