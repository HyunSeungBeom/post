import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import RadioButton from "../components/RadioButton";
import { ImgSource } from "../components/ImgSource";

export function Write() {
  const [selectedDrink, setSelectedDrink] = useState<string>();
  const [imagePreview, setImagePreview] = useState("");
  const { watch, register } = useForm();
  const image = watch("image");

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  const onSubmit = (data: any) => {
    console.log(image);

    // axios.post('/', data)
  };

  console.log(selectedDrink);
  console.log(image);

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
        <Writeh1>게시글 작성</Writeh1>
        <Uploadfile>
          <LayoutBox>
            <RadioButton set={setSelectedDrink} />
            <ImgSource set={setImagePreview} />
          </LayoutBox>
          <WriteBox>
            <Writestrong>게시글내용</Writestrong>
            <Writetext placeholder="게시글 내용을 작성해주세요."></Writetext>
            <WriteButton>게시글 작성</WriteButton>
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
  padding-bottom: 30px;
  width: 70%;
  flex-direction: column;
  height: 80%;
  align-items: center;
  display: flex;
  border-radius: 20px;
`;

export const Writeh1 = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  color: black;
  font-size: 50px;
  font-weight: bold;
`;

export const Uploadfile = styled.div`
  padding-right: auto;
  padding-left: auto;
  align-items: center;
  margin-top: 20px;
  width: 60%;
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
  box-sizing: border-box;
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

export const LayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
