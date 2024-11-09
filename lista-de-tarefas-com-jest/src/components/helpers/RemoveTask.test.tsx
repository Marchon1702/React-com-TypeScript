import removeTask from "./removeTask"

describe('RemoveTask deve', () => {

    const tasks = [
        'Estudar',
        'Fazer Compras',
        'Fazer Almoço'
    ]

    const gonnaBeDelTask = 'Fazer Almoço'

    test('Retornar um array sem a task removida', () => {
        const delTask = removeTask(gonnaBeDelTask, tasks)
        delTask.forEach(task => {
            expect(task !== gonnaBeDelTask)
        })
    })
})