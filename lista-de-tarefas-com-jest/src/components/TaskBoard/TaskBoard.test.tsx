import { render, screen } from "@testing-library/react";
import TaskBoard from ".";


describe("No TaskBoard", () => {
  test("Deve conter um formulario, com input e botão de submit", () => {
    render(<TaskBoard />);

    const formulario = screen.getByRole("form");
    expect(formulario).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Digite uma nova tarefa");
    expect(input).toBeInTheDocument();

    const botao = screen.getByRole("button");
    expect(botao).toBeInTheDocument();
  });

  test("Deve conter um lista desordenada", () => {
    render(<TaskBoard />);

    const listaDesordenada = screen.getByRole("unordenedList");
    expect(listaDesordenada).toBeInTheDocument();
  });
});
