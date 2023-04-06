import React from "react";
import { TodoTypes } from "../types/types";
import { TodoElement } from "./TodoElement";

interface Props {
  todos: TodoTypes[];
  deleteTodos: (id: number) => void;
  toggleTodos: ({ id, completed }: Pick<TodoTypes, "id" | "completed">) => void;
}

export const Todos: React.FC<Props> = ({ todos, deleteTodos, toggleTodos }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-xl mb-4">Tus tareas:</h1>
      {todos.map((todo) => (
        <div
          className={`${todo.completed ? "completed line-through" : " "} `}
          key={todo.id}
        >

          <TodoElement
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            deleteTodos={deleteTodos}
            toggleTodos={toggleTodos}
          />
        </div>
      ))}
    </div>
  );
};
