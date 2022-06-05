import React, {useEffect, useState} from 'react';
import './Form.css';
import List from './List';
import Task from './Task';

function Form(props){

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([{id:1, text: 'sfddsf'}]);

  function addTask(){
    const newTask = {
      id: new Date().toString(),
      text: value
    }
    setTodos([...todos,newTask]);
  }


    function handleSubmit(e){
      e.preventDefault();
      addTask();
      console.log(todos);
      e.target.reset();


    }



  return ( <div>
              <form onSubmit={handleSubmit}>
                <label>
                  <input className="input-todo" type="text"  value={props.value}  onChange={(e)=>setValue(e.target.value)} />
                </label>
                <input className="submit-button" type="submit" value="+" />
              </form>
              <div className='task'>
                {todos.map(elem=>
                    <Task todo={elem}/>
                )}
              </div>
            </div>

        )
}
export default Form;