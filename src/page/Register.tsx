import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputWord from "../components/InputBox";
import React, { Component } from "react";
export function Register() {
  const [userId, setUserId] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const nav = useNavigate();
  const HomeClick = () => {
    nav("/");
  };
  const LoginClick = () => {
    nav("/Login");
  };
  const SignupClick = () => {
    nav("/login");
  };

  return (
    <BigBackGround>
      <Between>
        <Buttonnormal onClick={HomeClick}>Home</Buttonnormal>
        <Buttonnormal onClick={LoginClick}>Login</Buttonnormal>
      </Between>
      <Registerh1>회원가입</Registerh1>
      <RegisterBox>
        <InputWord
          text={"아이디"}
          type={"text"}
          setWord={setUserId}
        ></InputWord>
        <InputWord
          text={"닉네임"}
          type={"text"}
          setWord={setNickname}
        ></InputWord>
        <InputWord
          text={"비밀번호"}
          type={"password"}
          setWord={setPassword}
        ></InputWord>
        <InputWord
          text={"비밀번호 확인"}
          type={"password"}
          setWord={setRepassword}
        ></InputWord>
      </RegisterBox>
      <SignupButton onClick={SignupClick}>회원가입하기</SignupButton>
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

export const Registerh1 = styled.h1`
  color: black;
`;

export const RegisterBox = styled.div``;

export const SignupButton = styled.button`
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
