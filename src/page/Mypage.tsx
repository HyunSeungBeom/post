import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputWord from "../components/InputBox";

export function Mypage() {
  const [nickname, setNickname] = useState<string>("");
  const nav = useNavigate();
  const HomeClick = () => {
    nav("/");
  };
  const Logout = () => {
    nav("/login");
  };

  return (
    <BigBackGround>
      <UpperMenu>
        <MainButton onClick={HomeClick}>Home</MainButton>
        <MainButton onClick={Logout}>로그아웃</MainButton>
      </UpperMenu>
      <MypageBox>
        <Mypageh1>회원정보 수정</Mypageh1>
        <InputWord
          text={"닉네임"}
          type={"text"}
          setWord={setNickname}
        ></InputWord>
        <RegisterButtons>
          <RegisterButton onClick={HomeClick}>적용</RegisterButton>
          <RegisterButton onClick={HomeClick}>취소</RegisterButton>
        </RegisterButtons>
      </MypageBox>
    </BigBackGround>
  );
}
export const BigBackGround = styled.div`
  background: gray;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  color: black;
  flex-direction: column;
  font-size: 20px;
`;

export const UpperMenu = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: black;
  padding: 20px;
  box-sizing: border-box;
`;

export const MainButton = styled.button`
  width: 90px;
  font-size: 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: gray;
  }
`;
export const MypageBox = styled.div`
  background: white;
  margin-top: 40px;
  width: 70%;
  flex-direction: column;
  height: 80%;
  align-items: center;
  display: flex;
  border-radius: 20px;
`;

export const Mypageh1 = styled.h1`
  font-size: 50px;
`;

export const RegisterButton = styled.button`
  width: 150px;
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

export const RegisterButtons = styled.div`
  margin: 10px;
  display: flex;
  gap: 20px;
`;
