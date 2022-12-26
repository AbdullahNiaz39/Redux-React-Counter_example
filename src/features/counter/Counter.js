import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetValue = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => dispatch(increment())}
          style={{ marginRight: "10px" }}
        >
          +
        </button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      ></input>
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Value
        </button>
        <button onClick={resetValue}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
