import { render, screen } from "@testing-library/react"
import Formulario from "."

test('Quando o input estiver vazio, novos participantes não podem ser adicionados.', () => {

    render(<Formulario />)

    // Encontrar o DOM do input
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

    // Encontrar Botão
    const botao = screen.getByRole('button')

    // Garantir que o input esteja no documento
    expect(input).toBeInTheDocument();

    // Garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()
})