
import './Task.css';
function Task(props){


  return(
    <div>
      <input type="checkbox"/>
      {props.todo.text}
      <button className="delButton" onClick={() => props.delete(props.todo)}>x</button>
    </div>

  )
}

export default Task;