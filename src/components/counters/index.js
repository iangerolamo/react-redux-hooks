import React from 'react';
import { connect } from 'react-redux'
import Counter from '../counter/index';
import './style.css';
import {
  addCounter,
  increment,
  decrement
} from '../../redux/action-creators';




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
    addCounter: () => dispatch(addCounter()),
    increment: (index) => () => dispatch(increment(index)),
    decrement: (index) => () => dispatch(decrement(index))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Counters)