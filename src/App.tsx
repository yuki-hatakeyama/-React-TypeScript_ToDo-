import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./Home";
import Test01 from "./Test01";

const App = () => {
  return (
    <BrowserRouter>
      <h2>リンクテスト</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/second">テスト</Link>
          </li>
        </ul>
      </nav>
      <article>
        <Route exact path="/" component={Home} />
        <Route path="/second" component={Test01} />
      </article>
    </BrowserRouter>
  );
};

export default App;
