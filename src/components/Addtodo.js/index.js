import {useState} from 'react'
import './style.css'

function Addtodo({todos, setTodos, data}) {
    const [todo, setTodo] = useState("");
    
    const changeInput = (e) => {
        setTodo(e.target.value);
    }

    const submitTodo = (e) => {
        e.preventDefault();
      if (todo !== ""){
        setTodos([...todos, {todo: todo, isDone: false}])
        data.push({todo:todo, isDone:false});
        localStorage.setItem("items", JSON.stringify(data))
      }
      else{
        alert("Please enter a to-do")
      }
      setTodo("");
    }


  return (
    <div id='addtodo'>
      <form onSubmit={submitTodo}>
      <input id='addtodoinput' name='todo' placeholder='What will you do today ?' value={todo} onChange={changeInput} />
        <button id='add' >Add</button>
      </form>
    </div>

  )
}

export default Addtodo
