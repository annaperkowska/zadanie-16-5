import React from 'react';
import style from './TodoList.css';
import Todo from './Todo'

const TodoList = ({tasks, remove}) => {
	var tasksList = tasks.map(function(data) {
		return <Todo key={data.id} removeTodo={remove} item={data}/>;
	});
	return (
		<div className={style.TodoList}>
			<h2>Things to do: </h2>
			<ul>
				{tasksList}
			</ul>
			<h5>(Click on task to delete)</h5>
		</div>
	);
};

export default TodoList;

