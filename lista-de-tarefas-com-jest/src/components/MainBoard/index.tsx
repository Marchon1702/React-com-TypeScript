import TaskBoard from "../TaskBoard";

export default function MainBoard() {
    return (
        <section className="main-board">
            <header>
                <h1>Lista de Tarefas</h1>
            </header>
            <main>
                <TaskBoard />
            </main>
            <footer>
                Desenvolvido por Matheus Marchon
            </footer>
        </section>
    )
}