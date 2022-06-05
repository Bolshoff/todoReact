

function Task(props){


  return(
    <div>
      <input type="checkbox"/>
      {props.todo.text}
      <div>x</div>
    </div>

  )
}

export default Task;