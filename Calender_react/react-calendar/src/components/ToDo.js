import React, { useState } from "react";

export const Todo = () => {
  //const storedTodos = localStorage.getItem("todos"); //parse???
  // const [todos, setTodos] = useState(storedTodos || []); // initialise state as local storage object
  const [todos, setTodos] = useState([]); // initialise state as local storage object
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodos = [
        ...todos,
        { id: Date.now(), text: newTodo, completed: false }
      ];
      setTodos(updatedTodos);
      setNewTodo("");
      console.log(todos);
    }
    // setItem - localStorage using updatedTodos const
    // localStorage.setItem("todos", todos);
  };

  const deleteTodo = (id) => {
    // const updatedTodos = [
    //   ...todos,
    //   { id: Date.now(), text: newTodo, completed: false }
    // ];
    //
    setTodos(todos.filter((todo) => todo.id !== id));
    // set local storage again here with updated todos (same as in add todo)
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      {/* <form> this will group the input and form allowing access to input value on */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      {/* </form> */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo