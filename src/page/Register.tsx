import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { Component } from "react";
import { useForm } from "react-hook-form";

export function Register() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(watch("email"));
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data: any) => {
    console.log("data", data);
    nav("/Login");

    // axios.post('/', data)
  };

  const nav = useNavigate();
  const HomeClick = () => {
    nav("/");
  };
  const LoginClick = () => {
    nav("/Login");
  };

  return (
    <BigBackGround>
      <Between>
        <Buttonnormal onClick={HomeClick}>Home</Buttonnormal>
        <Buttonnormal onClick={LoginClick}>Login</Buttonnormal>
      </Between>
      <Registerh1>회원가입</Registerh1>
      <RegisterBox>
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
          {errors.email && <P>이메일 형식이 맞지 않아요!</P>}
          <div>
            <Label>NickName</Label>
          </div>
          <InputStyleSingup
            type="name"
            {...register("name", {
              required: true,
              maxLength: 8,
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <P>nickname을 입력해주세요.</P>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <P>nickname 8글자 넘지 않도록 해주세요.</P>
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
          <div>
            <Label>Password Confirm</Label>
          </div>
          <InputStyleSingup
            type="password"
            {...register("password_confirm", {
              required: true,
              validate: (value) => value == password.current,
            })}
          />
          {errors.password_confirm &&
            errors.password_confirm.type === "required" && (
              <P>password을 입력해주세요.</P>
            )}
          {errors.password_confirm &&
            errors.password_confirm.type === "validate" && (
              <P>이 패스워드는 일치하지 않아요!</P>
            )}
          <div>
            <SignupButton type="submit" />
          </div>
        </form>
      </RegisterBox>
    </BigBackGround>
  );
}

export const BigBackGround = styled.div`
  background: gray;
  display: flex;
  width: 100%;
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

export const RegisterBox = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  color: white;
  flex-direction: column;
  font-size: 20px;
`;

export const SignupButton = styled.input`
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
