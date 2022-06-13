import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputWord from "../components/InputBox";

export function Login() {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nav = useNavigate();
  const HomeClick = () => {
    nav("/");
  };
  const SignupClick = () => {
    nav("/register");
  };
  const SignInClick = () => {
    nav("/");
  };

  return (
    <BigBackGround>
      <Between>
        <Buttonnormal onClick={HomeClick}>Home</Buttonnormal>
        <Buttonnormal onClick={SignupClick}>회원가입</Buttonnormal>
      </Between>
      <Loginh1>로그인</Loginh1>
      <InputBox>
        <InputWord
          text={"아이디"}
          type={"text"}
          setWord={setUserId}
        ></InputWord>
        <InputWord
          text={"비밀번호"}
          type={"password"}
          setWord={setPassword}
        ></InputWord>
      </InputBox>
      <SignInButton onClick={SignInClick}>로그인</SignInButton>
    </BigBackGround>
  );
}
export const BigBackGround = styled.div`
  background: gray;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  color: white;
  flex-direction: column;
  font-size: 20px;
`;
export const Between = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  width: 50%;
`;
export const Buttonnormal = styled.button`
  width: 150px;
  font-size: 30px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: gray;
  }
`;

export const Loginh1 = styled.h1`
  color: black;
`;
export const InputBox = styled.div``;

export const SignInButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 20px;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background: gray;
  }
`;
