import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todo
    };
  }
  
  addTodo = (e, toDoName) => {
    console.log('app.js file')
    e.preventDefault();
    const newToDo = {
      task: toDoName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todo: [...this.state.todo, newToDo]
    })
  }

  clearCompleted = e => [
    e.preventDefault(),
    this.setState({
      todo: this.state.todo.filter(todo => !todo.completed)
    })
  ]

  toggleTodo = todoId => {

    this.setState({
      todo: this.state.todo.map(todo => {
        if(todo.id === todoId) {
          return{...todo, completed: !todo.completed};
        }
        return todo;
      })
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to Joshua Draper's Todo App!</h2>
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>

        <div>
          <TodoList
            todo={this.state.todo}
            toggleTodo={this.toggleTodo}
            clearCompleted={this.clearCompleted} />
        </div>
      </div>
    );
  }
}

export default App;
