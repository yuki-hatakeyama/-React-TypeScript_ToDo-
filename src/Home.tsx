import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

const Home = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  /*
   * onRegistrationToDo()
   * todoを登録するための関数
   */
  const onRegistrationToDo = () => {
    if (todo.length > 0) {
      setTodos([...todos, todo]);
    }
    setTodo(() => ""); // 初期化
  };

  /*
   * getInputValue()
   * inputBoxで入力した文字を取得するための関数
   */
  const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(() => event.target.value);
  };

  /*
   * onDelete()
   * 該当のtodoを削除するための関数
   */
  const onDelete = (index: number) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <section>
        <h1>TODO リスト</h1>
        <ul>
          {todos.map((item: string, index: number) => {
            return (
              <li key={index}>
                <input type="checkbox" />
                <span> {item}</span>
                <button
                  type="button"
                  className="delete"
                  onClick={() => onDelete(index)}
                >
                  削除
                </button>
              </li>
            );
          })}
        </ul>
        <input value={todo} onChange={getInputValue} />
        <button onClick={onRegistrationToDo}>登録</button>
      </section>
    </div>
  );
};

export default Home;
