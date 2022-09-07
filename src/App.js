import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Index_form from "./components/AddTodoFrom/index_form";
import Index_List from "./components/TodoList/index_list";
import { UserContext } from "./UserContext";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodo] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      <UserContext.Provider value={{ todos, setTodo }}>
        <Index_form />
        <Index_List />
      </UserContext.Provider>
    </div>
  );
}

export default App;
