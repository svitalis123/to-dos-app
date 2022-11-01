import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleNewEntry = this.handleNewEntry.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.filter((todo) => todo.id !== id),
      ],
    }));
  }

  handleNewEntry = (title) => {
    const newTodos = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((oldState) => ({
      todos: [...oldState.todos, newTodos],
    }));
  }

  handleFormUpdate = (updatedValue, id) => {
    this.setState((oldState) => ({
      todos: oldState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedValue,
          };
        }
        return todo;
      }),
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo
            handleNewEntry={this.handleNewEntry}
          />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChange}
            handleDeleteProps={this.handleDelete}
            handleFormUpdate={this.handleFormUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
