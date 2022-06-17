import { FaRegHeart, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IdImage } from "../page/Main";
import React from "react";
import { useQuery } from "react-query";
import { boardApi } from "../Api/callApi";
import { IBoaderList } from "../Types/Interface";

export default function PostBox({ board }: { board: IBoaderList }) {
  const nav = useNavigate();
  const ReviseButtonClick = () => {
    nav("/revise");
  };

  return (
    <PostContainer>
      <UpperPost>
        <UpperPostLeft>
          <IdImage src="img/짱구.png"></IdImage>
          <div>{board.userNickname}</div>
        </UpperPostLeft>
        <UpperPostRight>
          <div>{board.createdAt}</div>
          <ReviseButton onClick={ReviseButtonClick}>수정</ReviseButton>
          <FaTrashAlt />
        </UpperPostRight>
      </UpperPost>
      {board.imageLink && (
        <ImageBox>
          <ImageSee src={board.imageLink} alt="" />
        </ImageBox>
      )}

      <Comment>{board.content}</Comment>
      <BottomMenu>
        <LikeCount>좋아요 {board.likes.length}</LikeCount>
        <FaRegHeart size="30px" color="#eb4b58" />
      </BottomMenu>
    </PostContainer>
  );
}
export const PostContainer = styled.div`
  margin-top: 20px;
  align-items: center;
  width: 500px;
  background: white;
  border-radius: 20px;
  justify-content: space-between;
  border: solid black 5px;
`;
export const UpperPost = styled.div`
  display: flex;
  color: black;
  justify-content: space-between;
  height: 50px;
  font-size: 25px;
`;

export const UpperPostLeft = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-left: 20px; ;
`;

export const UpperPostRight = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-right: 20px;
`;

export const ReviseButton = styled.button`
  width: 70px;
  font-size: 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: gray;
  }
`;

export const ImageBox = styled.div`
  margin-top: 15px;
  width: 90%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Comment = styled.div`
  margin-top: 10px;
  font-size: 25px;
  color: black;
  margin-left: 10px;
  margin-right: 10px;
`;

export const BottomMenu = styled.div`
  color: black;
  display: flex;
  box-sizing: border-box;
  padding-inline: 20px;
  width: 100%;
  height: 40px;
  justify-content: space-between;
`;
export const LikeCount = styled.div``;

export const ImageSee = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 10px;
`;
