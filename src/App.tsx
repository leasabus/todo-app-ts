import React, { useEffect, useState } from 'react'
import { Todos } from './components/Todos'
import { TodoId, TodoTitle, TodoTypes } from './types/types'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: 1,
    title: 'Tender la ropa',
    completed: false
  }
]

const LOCAL_STORAGE_KEY = 'todos';

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoTypes[]>(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : mockTodos;
  })


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);


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

  const handleDeleteAllTodos = () => {
    setTodos([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  return (
    <div className='flex flex-col items-center justify-center h-[100vh]  '>
      <Header onAddTodo={handleAddTodo} />
      <Todos todos={todos}
        deleteTodos={handleDeleteTodos}
        toggleTodos={handleToggleTodos} />
      {todos.length > 0 && (
        <button className='my-4 text-red-500 font-medium'
          onClick={handleDeleteAllTodos}>Borrar todas las tareas</button>
      )}
    </div>
  )
}

export default App
