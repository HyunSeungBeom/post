import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import React, { useState } from "react";
import { ImgSource } from "../components/ImgSource";

export function Revise() {
  const [imagePreview, setImagePreview] = useState("");
  const nav = useNavigate();
  const HomeClick = () => {
    nav("/");
  };
  const Logout = () => {
    nav("/login");
  };
  const Mypage = () => {
    nav("/mypage");
  };
  return (
    <BigBackGround>
      <UpperMenu>
        <MainButton onClick={HomeClick}>Home</MainButton>
        <SideMenu>
          <MainButton onClick={Mypage}>Mypage</MainButton>
          <MainButton onClick={Logout}>로그아웃</MainButton>
        </SideMenu>
      </UpperMenu>
      <WirteBox>
        <Writeh1>게시글 수정</Writeh1>
        <Uploadfile>
          <ImgSource set={setImagePreview} />
          <WriteBox>
            <Writestrong>게시글내용</Writestrong>
            <Writetext placeholder="게시글 내용을 수정해주세요."></Writetext>
            <WriteButton onClick={HomeClick}>게시글 수정</WriteButton>
          </WriteBox>
        </Uploadfile>
      </WirteBox>
    </BigBackGround>
  );
}
export const BigBackGround = styled.div`
  background: gray;
  display: flex;
  width: 100%;

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
export const SideMenu = styled.div`
  width: 200px;
`;

export const WirteBox = styled.div`
  background: white;
  margin-top: 40px;
  width: 70%;
  flex-direction: column;
  height: 80%;
  align-items: center;
  display: flex;
  border-radius: 20px;
  padding-bottom: 40px;
`;

export const Writeh1 = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  color: black;
  font-size: 50px;
  font-weight: bold;
`;

export const Uploadfile = styled.div`
  margin-top: 20px;
  width: 60%;
  margin-left: 20px;
`;

export const UploadInput = styled.input`
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin-left: 20%;
`;

export const WriteBox = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  height: 200px;
  flex-direction: column;
  display: flex;
`;

export const Writestrong = styled.strong`
  font-size: 30px;
`;

export const Writetext = styled.textarea`
  margin-top: 20px;
  font-size: 20px;
  height: 60%;
  border-radius: 20px;
  padding-left: 10px;
  padding-top: 10px;
  resize: none;
`;

export const WriteButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 150px;
  font-size: 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: gray;
  }
`;
