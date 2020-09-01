import React from 'react';
import { connect } from 'react-redux'
import Counter from '../counter/index';
import './style.css';

function Counters({ counters, increment, decrement, addCounter }) {
  
    return (
      <div>
          <button onClick={addCounter}>Add counter</button>
          {counters.map((counter, index) => (
          <Counter {...{
            key: index,
            counter,
            increment: increment(index),
            decrement: decrement(index)
          }} />
          ))}
      </div>
    );
  }

  const mapStateToProps = (state) => ({
    counters: state
  })
  
  const mapDispatchToProps = (dispatch) => ({
    addCounter: () => dispatch({ type: 'ADD_COUNTER' }),
    increment: (index) => dispatch({ type: 'INCREMENT' }),
    decrement: (index) => dispatch({ type: 'DECREMENT' })
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Counters)