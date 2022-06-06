
import './Task.css';
function Task(props){


  return(
    <div className="task-item">
      <input type="checkbox"/>
      {props.todo.text}
      <button className="delButton" onClick={() => props.delete(props.todo)}>x</button>
    </div>

  )
}

export default Task;