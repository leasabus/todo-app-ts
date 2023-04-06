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
    <div className='w-full mb-4'>
      <form onSubmit={handleAddTodo}>
        <input className='w-[350px] bg-slate-300 rounded p-1 text-black' type="text" placeholder='Que vas a hacer hoy?' value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)} />
      </form>
      <div>

      </div>

    </div>
  )
}
