import addTask from "./addTask"

describe('addTask deve', () => {
    const tasks = [
        'Estudar',
        'Fazer Compras',
        'Fazer Almoço'
    ]

    const newTask = 'Ir para a academia'

    test('Retornar um array com a nova tarefa', () => {
        const newTasks = addTask(newTask, tasks)
        expect(newTasks.includes(newTask))
    })
})