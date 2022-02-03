import propTypes from "prop-types";
import React, { useState } from "react";
import TodoForm from "./TodoForm.jsx";

const TodoList = (props) => {
	return (
		<>
			<div className="list-tasks">
				<ul>
					{props.list.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			</div>
		</>
	);
};
TodoList.propTypes = {
	list: propTypes.array,
};

export default TodoList;
