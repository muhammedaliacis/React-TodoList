import React from 'react'
import './style.css'
function Cleartodo({todos, setTodos, setisFilter}) {
    const clearTodos = () => {
      if (window.confirm("Are you sure you want to delete all ?")) {
          setTodos([]);
        }

    }
    const doclearTodos = () => {
      if (window.confirm("Are you sure you want to delete done todos ?")) {
        const done = todos.filter((item)  => item.isDone === false)
        setTodos(done); 
      }
     
  }

  const doneListTodos = () => {
    setisFilter(true);
}
const allListTodos = () => {
  setisFilter(false);
}
  return (
    <div className='cleartodo'>
        <button id='clear' onClick={clearTodos}>Delete Todos</button>
        <button id='clear' onClick={doclearTodos}>Delete Done </button>
        <button id='clear' onClick={doneListTodos}>Done</button>
        <button id='clear' onClick={allListTodos}>All</button>


    </div>
  )
}

export default Cleartodo