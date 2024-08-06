/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

import { removeTodo } from "../redux/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="font-bold text-red-700">Todos</h2>
      <ul className="text-center p-3">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="border bg-lime-300 items-center my-2 rounded text-start  justify-between flex ">
              {todo.text}
              <button
                className="border border-gray-700 m-2 bg-orange-300  "
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
