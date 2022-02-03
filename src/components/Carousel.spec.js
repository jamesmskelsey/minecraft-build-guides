/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from "@testing-library/vue";
import Carousel from "./Carousel.vue";

test("can click to get a guide", async () => {
  const { getByText, getByAltText } = render(Carousel);
  // Displays correct first page
  expect(getByAltText("Angled Walls")).toBeTruthy();

  // A list of the buttons I want to display
  const navButtons = [
    "Angled Walls",
    "Types of Barriers",
    "Getting Up, Down, and Around",
    "Arch with Pizazz",
    "Paths and Roads",
    "Roofs",
    "Triangles and Circles",
  ];

  // Test each button and check that the picture has changed in turn.

  for (let index = 0; index < navButtons.length; index++) {
    let buttonName = navButtons[index];
    let next = getByText(buttonName);
    expect(next).toBeTruthy();

    await fireEvent.click(next);
    expect(getByAltText(buttonName)).toBeTruthy();
  }
});
