import React from 'react';
import Form from './Form';
import List from './List';

function Main(props){


  return <div className="todo">
        <h2>High</h2>
          <Form />
          <List/>
        <h2>Low</h2>
           <Form />
            <List/>
        </div>
}

export default Main;