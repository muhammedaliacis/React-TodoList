import {useState} from 'react'
import Addtodo from '../Addtodo.js'
import Listtodos from '../Listtodos.js';
import Cleartodo from '../Cleartodo.js';
import './style.css'

function Todo() {
  const data = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    const [todos, setTodos] = useState(data);
    const [isFilter, setisFilter] = useState(false);
    

  return (
    <div id='alltodo'>
      <h1 id='alltodoh1'>TODO LİST</h1>
        <Addtodo todos={todos} setTodos={setTodos} data={data}/>
        <Listtodos todos={todos} setTodos={setTodos} isFilter={isFilter} />
        <Cleartodo todos={todos} setTodos={setTodos} setisFilter={setisFilter}/>
    </div>
  )
}

export default Todo
