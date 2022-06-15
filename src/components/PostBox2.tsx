import { FaRegHeart, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IdImage } from "../page/Main";
import React from "react";
import ImagePicker from "./ImagePicker";
import { useQuery } from "react-query";
import axios from "axios";

// const postUser = async () => {
//   const res = await axios.get("http://localhost:3000/db.json");
//   return res.data;
// };

export default function PostBox2() {
  //   const post_query = useQuery("post_list", postUser, {
  //     onSuccess: (data) => {
  //       console.log("성공했나?", data);
  //     },
  //   });
  const nav = useNavigate();
  const ReviseButtonClick = () => {
    nav("/revise");
  };
  return (
    <PostContainer>
      <UpperPost>
        <UpperPostLeft>
          <IdImage src="img/짱구.png"></IdImage>
          <div>seungb</div>
        </UpperPostLeft>
        <UpperPostRight>
          <div>1 days ago</div>
          <ReviseButton onClick={ReviseButtonClick}>수정</ReviseButton>
          <FaTrashAlt />
        </UpperPostRight>
      </UpperPost>
      <ImageBox>
        <ImagePicker />
        <Comment>
          짱구와 흰둥이가 즐겁게 놀고있어용!!!!짱구와 흰둥이가 즐겁게
          놀고있어용!!!!짱구와 흰둥이가 즐겁게 놀고있어용!!!!짱구와 흰둥이가
          즐겁게 놀고있어용!!!!짱구
        </Comment>
      </ImageBox>
      <BottomMenu>
        <LikeCount>좋아요 10k</LikeCount>
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
  margin-top: 10px;
  width: 100%;
  height: 50%;

  overflow: hidden;
  justify-content: space-between;
  display: flex;
`;

export const Comment = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 25px;
  color: black;

  overflow: hidden;
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
