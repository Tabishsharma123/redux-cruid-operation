// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../redux/todoSlice";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incrementCount())}>+</button>

      <p className="text-black">Count:{count}</p>
      <button onClick={() => dispatch(decrementCount())}>-</button>
    </div>
  );
};

export default Counter;
