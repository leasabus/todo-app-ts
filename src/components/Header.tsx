import React from 'react'
import { CreateTodo } from './CreateTodo'
import { TodoTitle } from '../types/types'


interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <div className='p-4'>
      <h1 className='font-bold text-2xl text-cyan-600'>Todo List App</h1>
      <CreateTodo addTodo={onAddTodo} />
    </div>
  )
}

