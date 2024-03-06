import { useState } from "react";
import {
	useAddTodoListMutation,
	useDeleteTodoListMutation,
	useGetTodoListsQuery,
} from "../redux/api";

const TodoList = () => {
	const { data, isLoading, error, refetch } = useGetTodoListsQuery();
	const [newListName, setNewListName] = useState("");
	const [addTodoList] = useAddTodoListMutation();
	const [deleteTodoList] = useDeleteTodoListMutation();

	const handleAddTodoList = async () => {
		if (newListName) {
			await addTodoList({ name: newListName });
			setNewListName(""), refetch();
		}
	};

	const handleDeleteTodoList = async (id) => {
		await deleteTodoList({ id: id });
	};

	if (error) {
		return <div>Error fetching data</div>;
	}

	return (
		<div>
			<h1>Todo Lists</h1>
			<ul>
				{isLoading ? (
					<h1>Loading...</h1>
				) : (
					<>
						{data.map((list) => (
							<li key={list._id}>
								{list.name}
								<button onClick={() => handleDeleteTodoList(list._id)}>
									Delete
								</button>
							</li>
						))}
					</>
				)}
			</ul>
			<div>
				<input
					value={newListName}
					onChange={(e) => setNewListName(e.target.value)}
					type=""
				/>
				<button onClick={handleAddTodoList}>Add Todo List</button>
			</div>
		</div>
	);
};

export default TodoList;
