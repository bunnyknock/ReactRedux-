import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
export default function ComponentTwo() {
  let dispatch = useDispatch()
  let { count } = useSelector(state => state.counterReducer)

  return (
    <div >
      <h1>Component Two Start</h1>

      <h1>count : {count}</h1>
      <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>Increment By Two</button><br />
      <button onClick={() => dispatch({ type: 'decrement', payload: 2 })}>Decrement By Two</button>

      <h1>Component Two end</h1>

    </div>
  )
}
