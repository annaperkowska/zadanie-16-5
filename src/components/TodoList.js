import React from 'react';
import style from './TodoList.css';
import Todo from './Todo'

const TodoList = props => {
	var tasksList = props.tasks.map(function(item => 
		<Todo key={item.id} remove={props.remove.bind(this)} name={item.text}/>)
	return (
		<div className={style.TodoList}>
			<h2>Things to do</h2>
			<ul>
				{tasksList}
			</ul>
		</div>
	);
};


export default TodoList;