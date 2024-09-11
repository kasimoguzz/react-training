import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./index";

describe("todo testing", () => {
  let input, button;

  beforeEach(() => {
    render(<Todo />);

    input = screen.getByLabelText("Text");
    button = screen.getByText("add");
  });

  test("varsayılan olarak 1 nesne render edilmeli", () => {
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(3);
  });

  test("buton ve input dokumanda var mı", () => {
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("ekleme işlemi oluyor mu", () => {
    const name = "user";
    fireEvent.change(input, { target: { value: name } });
    fireEvent.click(button);
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
