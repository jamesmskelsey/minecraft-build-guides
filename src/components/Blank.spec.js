/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from "@testing-library/vue";
import Blank from "./Blank.vue";

test("anything", async () => {
  const { getByText } = render(Blank);
  getByText("I'm a little teapot.");
});
