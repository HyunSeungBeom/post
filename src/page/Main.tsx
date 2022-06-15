import styled from "styled-components";
import { FaPlusCircle, FaRegHeart } from "react-icons/fa";
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostBox from "../components/PostBox";
import axios from "axios";
import { useQuery } from "react-query";
import PostBox2 from "../components/PostBox2";
import PostBox3 from "../components/PostBox3";

export function Main() {
  const [mouse, setMouse] = useState<boolean>(false);
  const nav = useNavigate();
  const move = () => {
    nav("/write");
  };
  const HomeButton = () => {
    nav("/");
  };

  const Logout = () => {
    nav("/login");
  };
  const Mypage = () => {
    nav("/mypage");
  };
  return (
    <>
      <BigBackGround>
        <UpperMenu>
          <MainButton onClick={HomeButton}>Home</MainButton>
          <SideMenu>
            <MainButton onClick={Mypage}>Mypage</MainButton>
            <MainButton onClick={Logout}>로그아웃</MainButton>
          </SideMenu>
        </UpperMenu>
        <PostBox />
        <PostBox2 />
        <PostBox3 />
      </BigBackGround>
      <ButtonPlus>
        <FaPlusCircle
          size={"80px"}
          onClick={move}
          cursor="pointer"
          color={mouse ? "#cecece" : "black"}
          onMouseOver={() => setMouse(true)}
          onMouseLeave={() => setMouse(false)}
        ></FaPlusCircle>
      </ButtonPlus>
    </>
  );
}
export const BigBackGround = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
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

export const IdImage = styled.img`
  border-radius: 20px;
`;

export const ButtonPlus = styled.div`
  width: 80px;
  height: 80px;
  background-color: white;
  display: flex;
  position: sticky;
  bottom: 40px;
  right: 150px;
  border-radius: 160px;
  overflow: hidden;
  float: right;
  z-index: 999;
`;
