import editTask from "./editTaskList"

describe('editTaskListDeve', () => {

    const task = 'Caminhar'

    test('retornar um tarefa', () => {
        const edit = editTask(task)
        expect(edit).toBe(task)

    })
})