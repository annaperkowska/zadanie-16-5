import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.addtask(this.state.value);
    event.preventDefault();
    this.state.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task to do:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoForm;