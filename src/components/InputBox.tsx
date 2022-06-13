import { useRef } from "react";
import styled from "styled-components";
import React, { Component } from "react";

export default function InputWord({
  setWord,
  text,
  type,
}: {
  setWord: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  type: string;
}) {
  const inputChange = () => {
    if (useref.current) {
      setWord(useref.current.value);
    }
  };
  const useref = useRef<HTMLInputElement>(null);

  return (
    <InputBoxstyle>
      <InputGap>{text}</InputGap>
      <InputStyle type={type} ref={useref} onChange={inputChange} />
    </InputBoxstyle>
  );
}

export const InputBoxstyle = styled.div`
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const InputGap = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: bold;
`;

export const InputStyle = styled.input`
  width: 400px;
  height: 60px;
  border-radius: 20px;
  font-size: 30px;
  padding-left: 10px;
  box-sizing: border-box;
`;
