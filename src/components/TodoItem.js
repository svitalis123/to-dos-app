import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.props = props;
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleDoubleClick = () => {
    this.setState({
      editing: true,
    });
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.setState({
        editing: false,
      });
    }
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { completed, id, title } = this.props.todo;

    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleDoubleClick}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button type="button" onClick={() => this.props.handleDeleteProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          className={styles.inputText}
          value={title}
          onChange={(e) => this.props.handleFormUpdate(e.target.value, id)}
          onKeyDown={this.handleKeyDown}
          style={editMode}
        />
      </li>
    );
  }
}
export default TodoItem;
