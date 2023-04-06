export interface TodoTypes {
    id: number,
    title: string,
    completed: boolean
}

export type TodoId = Pick<TodoTypes, 'id'>
export type TodoTitle = Pick<TodoTypes, 'title'>
export type TodoCompleted = Pick<TodoTypes, 'completed'>