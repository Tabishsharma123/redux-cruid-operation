// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const Addtodo = () => {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();

  function handlesubmit(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setinput("");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="enter todos..."
        onChange={(e) => setinput(e.target.value)}
        className="text-white bg-slate-600 text-center border-gray-700 border py-1 px-3 focus:border-indigo-500 "
      />
      <button
        onClick={handlesubmit}
        disabled={input.trim() === ""}
        className={`text-white bg-blue-500 border border-red-800 py-1 px-3 m-3 text-center ${
          input.trim() === "" ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Add button
      </button>
    </div>
  );
};

export default Addtodo;
