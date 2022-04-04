import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

const { asFragment } = render(<About />);

afterEach(cleanup);
expect(asFragment()).toMatchSnapshot();

describe("About component", () => {
  // First Test
  it("renders", () => {
    render(<About />);
  });

  // Second Test
  it("matches snapshot DOM node structure", () => {
    // render About
  });
});
