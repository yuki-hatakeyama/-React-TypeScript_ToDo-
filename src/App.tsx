import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoItem, setTodoItem] = useState("");

  const onRegistrationToDo = (event: any) => {
    setTodos([...todos, todoItem]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(() => event.target.value);
  };

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <section>
        <h1>TODO リスト</h1>
        <ul>
          {todos.map((item: string) => {
            return <li>{item}</li>;
          })}
        </ul>
        <input value={todoItem} onChange={handleChange} />
        <button onClick={onRegistrationToDo}>登録</button>
      </section>
    </div>
  );
};

export default App;
