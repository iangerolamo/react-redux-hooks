import React from 'react';


function Counter({ counter, increment, decrement }) {
  return (
    <div>
      <h1> {counter} </h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;