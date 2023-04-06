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
    <div className="shadow-xl w-[500px] h-auto">
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
