import React from 'react'

function ToggleButton({ show, setShow }) {

  function handleClick() {
    setShow(() => !show)
  }

  return (
    <p><button onClick={handleClick}>{show ? "Hide" : "Show"} Comments</button></p>
  )
}

export default ToggleButton