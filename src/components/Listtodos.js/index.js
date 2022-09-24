import './style.css'


function Listtodos({todos,setTodos, isFilter}) {

  
  const doTodos = (index,todo) => {
    document.getElementById(index).classList.toggle("open");
     document.getElementById(index + 10).classList.toggle("open-buton")
     if (todo.isDone === false){
     todo.isDone = true;
    }
    else {
      todo.isDone = false;
    }

  }

  const deleteTodo = (item) => {
    const fltrd = todos.filter(tod => tod.todo !== item.todo)
    setTodos(fltrd);
  }

  return (
    <div>
      <ul className='list-ul'>
        {
           todos.map((todo, index) => (todo.isDone && <li id={index} className='list open' key={index}><button onClick={() => doTodos(index, todo)} id={index + 10} className='listbuton open-buton'></button>{todo.todo}<button onClick={() => deleteTodo(todo)} className='delete'></button></li> ))
           
        }
        {
           !isFilter && todos.map((todo, index) => (!todo.isDone && <li id={index} className='list' key={index}><button onClick={() => doTodos(index, todo)} id={index + 10} className='listbuton'></button>{todo.todo} <button onClick={() => deleteTodo(todo)} className='delete'></button> </li> ))
           
        }


      </ul>
    </div>
  )
}

export default Listtodos