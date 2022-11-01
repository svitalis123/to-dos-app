import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleFormInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.handleNewEntry(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('You must add a title');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitForm} className="form-container">
        <input
          type="text"
          className="input-text"
          value={this.state.title}
          name="title"
          onChange={this.handleFormInputChange}
        />
        <button type="submit" className="input-submit">submit</button>
      </form>
    );
  }
}

export default InputTodo;
