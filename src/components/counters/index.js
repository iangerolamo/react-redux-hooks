import React, { useState } from 'react';
import Counter from '../counter/index';
import './style.css';

function Counters() {
    
    const [counter, setCounter] = useState(0);
  
    function handleDecrement() {
      setCounter(counter - 1);
    }
  
    function handleIncrement() {
      setCounter(counter + 1);
    }
  
    return (
      <div>
        {[0, 0, 0].map((item) => (
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