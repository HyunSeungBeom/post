import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./page/Main";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { createGlobalStyle } from "styled-components";
import { Write } from "./page/Write";
import { Revise } from "./page/Revise";

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Hi Melody', cursive;
}
body{
  background: gray;
}
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/write"} element={<Write />} />
          <Route path={"/revise"} element={<Revise />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
