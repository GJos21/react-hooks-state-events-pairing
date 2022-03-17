import React from 'react'

function CounterButton({ counter, setCounter, emoji }) {

  function handleClick() {
    setCounter(() => counter + 1)
  }

  return (
    <button onClick={handleClick}>{counter} {emoji}</button>
  )
}


export default CounterButton