import React, {useEffect, useState} from 'react';
import './Form.css';
import List from './List';

function Form(props){

  const[value, setValue] = useState('');
    function handleSubmit(e){
      e.preventDefault();
      console.log(value);
      e.target.reset();

    }

    function handleChange(e){
      setValue(e.target.value);
    }

  return ( <form onSubmit={handleSubmit}>
            <label>
              <input className="input-todo" type="text"  value={props.value}  onChange={handleChange} />
            </label>
            <input className="submit-button" type="submit" value="+" />
          </form>



  );
}
export default Form;