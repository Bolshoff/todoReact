import React, {useState} from 'react';
import './Form.css';
import Task from './Task';

function Form(props){

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  function addTask(){
    const newTask = {
      id: Date.now(),
      text: value,
      done: false
    }
    setTodos([...todos,newTask]);
    setValue('')
  }
  const delTask =(todo)=>{
    setTodos(todos.filter(elem => elem.id !== todo.id))
  }


    function handleSubmit(e){
      e.preventDefault();
      addTask();
      e.target.reset();
    }



  return ( <div>
              <h3>{props.header}</h3>
              <form onSubmit={handleSubmit}>
                <label>
                  <input className="input-todo" type="text"  value={props.value}  onChange={(e)=>setValue(e.target.value)} />
                </label>
                <input className="submit-button" type="submit" value="+" />
              </form>
              <div className='task'>
                {todos.map(elem=>
                    <Task todo={elem} delete={delTask} key={elem.id}/>
                )}

              </div>
            </div>

        )
}
export default Form;