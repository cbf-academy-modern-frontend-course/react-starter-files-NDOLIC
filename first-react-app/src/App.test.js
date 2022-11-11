import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import { act } from 'react-dom/test-utils';
import ReactDom from 'react-dom/client';

import App from "./App";

test("renders button", () => {
  render(<App />);
  screen.debug;

  const button = screen.getByText(/Click to Reveal/i);
  expect(button).toBeInTheDocument();
});

test("renders without crashing", () => {
  act(() => {
    const root = ReactDOM.createRoot(document.createElement("div"));
    root.render(<App />);
    screen.debug;
  });
});

test('renders h1', () => {
  render(<App />);
  const h1 = screen.getByText(/My React Page/i);
  expect(h1).toBeInTheDocument();
});
test('renders without crashing', () => {
  act(() => {
    const root = ReactDOM.createRoot(document.createElement('div'));
    root.render(<App />);
  });
});