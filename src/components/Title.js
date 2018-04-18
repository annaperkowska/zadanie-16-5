import React from 'react';

const Title = props => 
<div>
	<h1>{props.title}</h1>
	<h4>number of tasks: {props.length}</h4>
</div>;

export default Title;