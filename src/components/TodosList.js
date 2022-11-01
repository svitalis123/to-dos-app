import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            handleDeleteProps={this.props.handleDeleteProps}
            handleFormUpdate={this.props.handleFormUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
