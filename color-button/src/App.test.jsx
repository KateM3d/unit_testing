import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpace } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  //find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  //click button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  //expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to Medium Violet Red");
});

test("initial condition", () => {
  render(<App />);
  //check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
test("checkbox disabled button after one click and enables on second click", () => {
  render(<App />);
  //when checkbox is checked button should be disabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("button to turn gray when the button is disabled", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: MediumVioletRed");
});

test("clicked disabled button has gray background and reverst to Midnight Blue", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  //change to blue
  fireEvent.click(colorButton);

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: MidnightBlue");
});

//Medium Violet Red
//Midnight Blue

describe("spaces before camel-case capital letterts", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpace("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpace("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
