import { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoList() {
    const [todos, setTodos] = useState([
        {
            task: "Sample Task",
            id: uuid(),
            isDone: false,
        },
    ]);

    const [newTodo, setNewTodo] = useState("");

    // Add New Task
    const addNewTask = () => {
        if (newTodo.trim() === "") return;

        setTodos((prevTodos) => [
            ...prevTodos,
            {
                task: newTodo,
                id: uuid(),
                isDone: false,
            },
        ]);

        setNewTodo("");
    };

    // Update Input
    const updatedTodo = (event) => {
        setNewTodo(event.target.value);
    };

    // Delete Task
    const deleteTodos = (id) => {
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== id)
        );
    };

    // Uppercase All
    const upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase(),
            }))
        );
    };

    // Mark Task as Done
    const markDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, isDone: true }
                    : todo
            )
        );
    };

    return (
        <div>
            <h2>To-Do App</h2>

            <input
                type="text"
                placeholder="Add Task"
                value={newTodo}
                onChange={updatedTodo}
            />

            <button onClick={addNewTask}>Add</button>

            <hr />

            <h3>My Tasks</h3>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.isDone
                                    ? "line-through"
                                    : "none",
                                color: todo.isDone ? "gray" : "black",
                            }}
                        >
                            {todo.task}
                        </span>

                        {"  "}

                        <button onClick={() => markDone(todo.id)}>
                            Done
                        </button>

                        {"  "}

                        <button onClick={() => deleteTodos(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <br />

            <button onClick={upperCaseAll}>
                UpperCase All
            </button>
        </div>
    );
}

export default TodoList;