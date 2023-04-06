import React from "react";
import { TodoTypes } from "../types/types";

interface Props extends TodoTypes {
  deleteTodos: (id: number) => void;
  toggleTodos: ({ id, completed }: Pick<TodoTypes, "id" | "completed">) => void;
}

export const TodoElement: React.FC<Props> = ({
  title,
  id,
  completed,
  deleteTodos,
  toggleTodos,
}) => {
  const handleToggleTodos = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleTodos({
      id,
      completed: event.target.checked,
    });
  };

  return (
    <div className="flex flex-row justify-between w-[400px]">
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleTodos}
        />

        <span>{title}</span>
        <span>{completed}</span>
      </div>
      <div>
        <button
          onClick={() => deleteTodos(id)}
          className="text-red-500 font-bold"
        >
          X
        </button>
      </div>
    </div>
  );
};
