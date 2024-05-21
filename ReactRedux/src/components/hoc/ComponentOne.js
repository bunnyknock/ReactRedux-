import React from 'react'
import { useDispatch, useSelector } from 'react-redux';



function ComponentOne() {

  let dispatch = useDispatch()
  let { count } = useSelector(state => state.counterReducer)
  return (
    <div>
      <h1>Component One Start</h1>
      <h1>count : {count}</h1>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment By One</button><br />
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement By One</button>
      <h1>Component One end</h1>
    </div>
  )
}
export default ComponentOne 