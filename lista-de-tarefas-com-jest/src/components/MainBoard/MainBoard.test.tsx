import { render } from "@testing-library/react";
import MainBoard from ".";

describe("Ações MainBoard", () => {
  test("A MainBoard deve renderizar corretamente", () => {
    const { container } = render(<MainBoard />);
    expect(container).toMatchSnapshot();
  });
});
