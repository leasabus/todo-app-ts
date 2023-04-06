import React, { useState } from 'react'
import { TodoTitle } from '../types/types'

interface Props {
  addTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ addTodo }) => {

  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addTodo({ title: inputValue })
    setInputValue('')
  }
  return (
    <div className='w-full'>
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder='Que quieres hacer?' value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)} />
      </form>
      <div>

      </div>

    </div>
  )
}
