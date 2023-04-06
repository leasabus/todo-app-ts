import React from 'react'
import { CreateTodo } from './CreateTodo'
import { TodoTitle } from '../types/types'


interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl text-cyan-600 mb-4'>Todo List App</h1>
      <CreateTodo addTodo={onAddTodo} />
    </div>
  )
}

