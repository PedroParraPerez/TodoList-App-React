import React, { useState } from "react";
import propTypes from "prop-types";
import TodoList from "./TodoList.jsx";

const TodoForm = () => {
	const [inputValue, setInputValue] = useState("");
	const [list, setList] = useState([]);

	const hundleSubmit = (e) => {
		e.preventDefault();
		setList([...list, inputValue]);
	};

	return (
		<>
			<div className="wrap">
				<form onSubmit={hundleSubmit}>
					<h2 className="title">TodoList</h2>
					<label htmlFor="input-task">
						<strong>Task</strong>
					</label>
					<br />
					<input
						type="text"
						className="input-task"
						name="input-task"
						placeholder="Add a task"
						onChange={(event) => setInputValue(event.target.value)}
						value={inputValue}
					/>
					<input className="submit" type="submit" value="Submit" />
				</form>
				<TodoList list={list} />
			</div>
		</>
	);
};

export default TodoForm;
