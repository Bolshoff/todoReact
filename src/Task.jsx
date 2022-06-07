
import './Task.css';
import {useState} from 'react';
function Task(props){
  const [checked, setChecked] = useState(false);
  


  return(

    <form>
      <input type="checkbox"
             checked={checked}
             onChange={() => setChecked(!checked)}
      />

     {checked ? <div style={{textDecoration:'line-through', color: 'green'}} >{props.todo.text}</div> :  <div >{props.todo.text}</div>}
      <button className="delButton"
              onClick={() => props.delete(props.todo)}>x</button>
    </form>

  )
}

export default Task;