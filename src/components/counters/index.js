import React, { useState } from 'react';
import Counter from '../counter/index';
import './style.css';

function Counters() {
    
    const [counter, setCounter] = useState(0);
    const [add, setAdd] = useState([]);
  
    function handleDecrement() {
      setCounter(counter - 1);
    }
  
    function handleIncrement() {
      setCounter(counter + 1);
    }

    function handleAdd() {
      setAdd(add.concat(0))
    }
    
    

    return (
      <div>
          <button onClick={handleAdd}>Add counter</button>
          {add.map((item) => (
            <Counter 
          counter={counter}
          increment={handleIncrement}
          decrement={handleDecrement}
            />
          ))}
      </div>
    );
  }

  
  export default Counters;