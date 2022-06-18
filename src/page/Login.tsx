import axios from "axios";
import React, { Component, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { registerApi } from "../Api/callApi";
import { tokenState } from "../recoil/store";
import { SignupButton } from "./Register";

export function Login() {
  const loginToken = useSetRecoilState(tokenState);
  const tokenUse = useRecoilValue(tokenState);
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(watch("email"));
  const password = useRef();
  password.current = watch("password");

  console.log(tokenUse);
  const onSubmit = (data: FieldValues) => {
    loginMutation.mutate(data);
  };
  const loginMutation = useMutation(
    (data: FieldValues) => registerApi.singInApi(data),
    {
      onSuccess: (token) => {
        console.log(token.data);
        loginToken(token.data);
        nav("/");
      },
    }
  );
  const nav = useNavigate();
  const HomeClick = () => {
    nav("/");
  };
  const SignupClick = () => {
    nav("/register");
  };

  return (
    <BigBackGround>
      <Between>
        <Buttonnormal onClick={HomeClick}>Home</Buttonnormal>
        <Buttonnormal onClick={SignupClick}>회원가입</Buttonnormal>
      </Between>
      <Loginh1>로그인</Loginh1>
      <InputBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label>Email</Label>
          </div>
          <InputStyleSingup
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && errors.email.type === "pattern" && (
            <P>이메일 형식이 맞지 않아요!</P>
          )}
          {errors.email && errors.email.type === "required" && (
            <P>email을 입력해주세요.</P>
          )}
          <div>
            <Label>Password</Label>
          </div>
          <InputStyleSingup
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <P>password을 입력해주세요.</P>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <P>password는 6글자를 넘겨야 합니다.</P>
          )}
          <div style={{ textAlign: "center" }}>
            <SignupButton type="submit" />
          </div>
        </form>
      </InputBox>
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

export const Label = styled.label`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;
const InputStyleSingup = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 20px;
  font-size: 20px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const P = styled.p`
  color: white;
  font-size: 20px;
  margin-top: 2px;
`;
