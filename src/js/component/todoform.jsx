import React, { useState } from "react";
import propTypes from "prop-types";

const TodoForm = () => {
	const [inputValue, setInputValue] = useState("");
	const [list, setList] = useState([]);
	const [validation, setValidation] = useState(true);

	const Submit = (e) => {
		e.preventDefault();
		if (inputValue.trim() !== "") {
			setList([...list, inputValue]);
			setInputValue("");
			setValidation(true);
		} else {
			setValidation(false);
		}
	};
	const Delete = (index) => {
		let tmp = list;
		list.splice(index, 1);
		setList([...tmp]);
	};

	return (
		<>
			<div className="wrap">
				<form onSubmit={Submit}>
					<h2 className="title">TodoList</h2>
					<label className="label-task" htmlFor="input-task">
						<strong>Task</strong>
					</label>
					<br />
					<input
						type="text"
						className="input-task"
						name="input-task"
						placeholder="Add a task..."
						onChange={(event) => setInputValue(event.target.value)}
						value={inputValue}
					/>
					{!validation && (
						<div className="validation">
							{" "}
							<b>Add Task please</b>
						</div>
					)}
					<input className="submit" type="submit" value="Submit" />
				</form>

				<div className="list-tasks">
					{list.map((item, i) => (
						<div className="tareaa" key={i}>
							<p>{item}</p>
							<span className="delete" onClick={() => Delete(i)}>
								🗑️
							</span>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default TodoForm;
