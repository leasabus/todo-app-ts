import React from 'react'
import { CreateTodo } from './CreateTodo'
import { TodoTitle } from '../types/types'


interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <div>
      <h1>Add todo</h1>
      <CreateTodo addTodo={onAddTodo} />
    </div>
  )
}

