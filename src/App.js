import React, { Component } from 'react';

import './App.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <tr>
        
        <div className="col-md-4" key={i}>
          
            <table className="card-title text-center">
            
             <td> <p>{todo.carnet}</p></td>
              <td><span className="badge badge-pill badge-danger ml-2">
                {todo.schedule}
              </span></td>
            
              <td><div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button> </div></td>
              
            </table>
          </div>
       
        </tr>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Practica de Laboratorio
           
            
          
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <table className="row">
                {todos}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
