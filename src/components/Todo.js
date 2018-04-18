import React from 'react';

const Todo = props =>
	<li key={item.id} onClick={()=> {props.remove(item.id)}}>{props.name}</li>

export default Todo;