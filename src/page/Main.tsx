import styled from "styled-components";
import { FaPlusCircle, FaRegHeart } from "react-icons/fa";
import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostBox from "../components/PostBox";
import axios from "axios";
import { useQuery } from "react-query";
import { boardApi } from "../Api/callApi";
import { IBoaderList } from "../Types/Interface";
import { jwtUtils } from "../utils/JwtUtils";
import { useRecoilValue } from "recoil";
import { tokenState } from "../recoil/store";
import { ToastContainer, toast } from "react-toastify";

export function Main() {
  const postbox_query = useQuery(["board_list"], () => boardApi.watchApi(), {
    onSuccess: (data) => {
      console.log("success", data);
    },
  });
  const [mouse, setMouse] = useState<boolean>(false);
  const [token, setToken] = useState<boolean>(false);
  const tokenUse = useRecoilValue(tokenState);
  const nav = useNavigate();
  const move = () => {
    nav("/write");
  };
  const HomeButton = () => {
    nav("/");
  };
  const Login = () => {
    nav("/login");
  };
  const Logout = () => {
    nav("/login");
    localStorage.clear();
  };

  const nologin = () => {
    alert("로그인을 이용하세요!");
  };

  useEffect(() => {
    if (jwtUtils.isAuth(tokenUse)) {
      setToken(true);
    } else setToken(false);
  }, [tokenUse]);

  return (
    <>
      <BigBackGround>
        <UpperMenu>
          <MainButton onClick={HomeButton}>Home</MainButton>
          <SideMenu>
            {token ? (
              <MainButton onClick={Logout}>로그아웃</MainButton>
            ) : (
              <MainButton onClick={Login}> 로그인</MainButton>
            )}
          </SideMenu>
        </UpperMenu>
        {postbox_query.isSuccess &&
          postbox_query.data.data.map((board: IBoaderList) => {
            return (
              <PostBox
                key={board.board_id}
                boardId={board.board_id}
                board={board}
                layoutnumber={board.layout}
              />
            );
          })}
      </BigBackGround>
      <ButtonPlus>
        <FaPlusCircle
          size={"80px"}
          onClick={token ? move : nologin}
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
