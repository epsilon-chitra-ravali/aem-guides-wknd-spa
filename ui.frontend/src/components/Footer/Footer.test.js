import React from 'react';
import Footer from './Footer';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'

describe('DSTGridviewMicroFE test', () => {
  let renderedElem

  beforeEach(() => {
    renderedElem = render(<Footer />);
  });

  afterEach(() => {
    cleanup();
  })

  it('should match Snapshot', async () => {
    expect(renderedElem).toMatchSnapshot('s1');
  });
});