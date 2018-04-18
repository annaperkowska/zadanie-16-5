import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{
				id: 1,
    			text: 'water plants'
				}, {
				id: 2,
    			text: 'walk the dog'
				}, {
				id: 3,
    			text: 'take a nap'
				}
			]
		};
		this.removeTodo = this.removeTodo.bind(this);
	}
	addTodo(val){
		const todo = {
			text: val,
			id: uuid.v4(),
		};	
		const data = [...this.state.data, todo];
		this.setState({data});
	}

	removeTodo(id) {
		const reminder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data:reminder});
	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title title='To do list' />
				<TodoForm addtask={this.addTodo.bind(this)}/>
				<TodoList className={style.TodoList} tasks={this.state.data} remove={this.removeTodo.bind(this)}/>
			</div>
		);
	}
}

export default App;