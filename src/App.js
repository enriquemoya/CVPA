import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import { fromEventPattern } from 'rxjs';
import database from './firebase-config';

const todos = database.child("todos");


class App extends React.Component {

  state = {
    todos: {},
    text: ""
  }

  constructor(props){
    super(props);
    todos.on("value", snapshot => {
      console.log(snapshot.val());
      this.setState({...this.state, text:"", todos: snapshot.val()});
    });
  }

  addToDo = () => {
    todos.push().set(this.state.text);
  };

  completeToDo = completeToDo => {
    todos.child(completeToDo).remove();
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <input name="text" value={this.state.text} onChange={evt => this.setState({...this.state, text: evt.target.value})}/>
            <button onClick={() => this.addToDo()}>add</button>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Remove</th>
                  </tr>
              </thead>
              <tbody>
                {
                  Object.keys(this.state.todos).map((item,index)=>{
                    return(
                      <tr key={index}>
                          <td>{this.state.todos[item]}</td>
                          <td><button onClick={() => this.completeToDo(item)}>remove</button></td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
