import { render, screen } from "@testing-library/react"
import ListTasks from "."
import removeTask from "../helpers/removeTask"
import React from "react"

describe('Uma lista de tarefas vazia deve', () => {

    const setTasks = jest.fn();
    jest.spyOn(React, "useState").mockImplementation(() => [[], setTasks]);

    const setToEditTask = jest.fn();
    jest.spyOn(React, "useState").mockImplementation(() => ["", setToEditTask]);

    test('Ser renderizada sem elementos', () => {
        render(<ListTasks tasks={[]} setTasks={setTasks} setToEditTask={setToEditTask} removeTask={removeTask}/>)

        const listItens = screen.queryAllByRole('listitem')
        expect(listItens).toHaveLength(0)
    })
})

describe('Uma lista de tarefas preenchida', () => {

    const tasks = [
        'Estudar', 'FazerCompras', 'Fazer Almoço'
    ]
    const setTasks = jest.fn();
    jest.spyOn(React, "useState").mockImplementation(() => [tasks, setTasks]);

    const setToEditTask = jest.fn();
    jest.spyOn(React, "useState").mockImplementation(() => ["", setToEditTask]);

    test('Deve renderizar todas as tasks', () => {
        render(<ListTasks tasks={tasks} setTasks={setTasks} setToEditTask={setToEditTask} removeTask={removeTask}/>)

        const listItens = screen.queryAllByRole('listitem')
        expect(listItens).toHaveLength(tasks.length)
    })
    
})