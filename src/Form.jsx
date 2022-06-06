import React, {useState} from 'react';
import './Form.css';
import Task from './Task';

function Form(props){

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  function addTask(){
    const newTask = {
      id: Date.now(),
      text: value
    }
    setTodos([...todos,newTask]);
    setValue('');
  }
  const delTask =(todo)=>{
    setTodos(todos.filter(elem => elem.id !== todo.id))
  }

    function handleSubmit(e){
      e.preventDefault();
    if(value !== ''){
      addTask();
    }

    }



  return ( <div>
              <h3>{props.header}</h3>
              <form onSubmit={handleSubmit}>
                <label>
                  <input className="input-todo" type="text"  value={value}  onChange={(e)=>setValue(e.target.value)} />
                </label>
                <input className="submit-button" type="submit" value="+" />
              </form>
              <div className='task'>
                {todos.map(elem=>
                    <Task todo={elem} key={elem.id} delete={delTask}/>
                )}

              </div>
            </div>

        )
}
export default Form;