import React from "react";
import ToDosList from "./TodosList";
import Task from "./Task";

//create your first component
const Home = () => {
	return (
		<div className="">
			<h1 className="d-flex justify-content-center mt-5">ToDoList of Sharguidev (Guillermo)</h1>
			<div>
				<ToDosList/>
			</div>
		</div>
	);
};

export default Home;