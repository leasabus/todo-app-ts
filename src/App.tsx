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
    return storedData ? JSON.parse(storedData) : mockTodos[0];
  })
  //esta funcion dentro del usetate chequea si hay algun valor para mostrar
  //dentro del localstorage, en este caso la key es un todo
  //si el storedDdata devuelve algun valor lo muestra, si no por defecto muestra un mock


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  //el use effect se va a ejecutar cada vez que todos cambie y va a guardar la nueva todo

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
    //seteamos las todos como un array vacio y borramos todas las key de todos
  }

  return (
    <div className='flex flex-col items-center justify-center max-w-[1140px] h-[600px] p-4 '>
      <Header onAddTodo={handleAddTodo} />
      <Todos todos={todos}
        deleteTodos={handleDeleteTodos}
        toggleTodos={handleToggleTodos} />
      {todos.length > 0 && (
        <button className='my-4 text-white bg-cyan-500 font-medium p-1 rounded hover:bg-cyan-900'
          onClick={handleDeleteAllTodos}>Borrar todas</button>
      )}
    </div>
  )
}

export default App
