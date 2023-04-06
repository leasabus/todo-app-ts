import React, { useState } from 'react'
import { Todos } from './components/Todos'
import { TodoId, TodoTitle, TodoTypes } from './types/types'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: 1,
    title: 'Planchar',
    completed: false
  },
  {
    id: 2,
    title: 'Hacer la cama',
    completed: false
  },
  {
    id: 3,
    title: 'Cocinar',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleDeleteTodos = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleToggleTodos = ({ id, completed }: Pick<TodoTypes, 'id' | 'completed'>) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) return {
        ...todo,
        completed
      }
      return todo;
    })
    setTodos(newTodo)
  }


  const handleAddTodo = ({ title }: TodoTitle) => {
    const newTodo = {
      title,
      id: Math.floor(Math.random() * 1500),
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='flex flex-col items-center justify-center h-[100vh] '>
      <Header onAddTodo={handleAddTodo} />
      <Todos todos={todos}
        deleteTodos={handleDeleteTodos}
        toggleTodos={handleToggleTodos} />
    </div>
  )
}

export default App
