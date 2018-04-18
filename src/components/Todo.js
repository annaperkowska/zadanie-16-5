import React from 'react';

const Todo = ({item, removeTodo}) => {
	return <li key={item.id} onClick={()=> removeTodo(item.id)}><i class="fas fa-angle-left"></i>  {item.text}  <i class="fas fa-angle-right"></i></li>
};

export default Todo;