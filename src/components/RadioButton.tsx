import React, { useState } from "react";
import styled from "styled-components";

const RadioButton = ({
  set,
}: {
  set: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    set(event.target.value);
  };

  return (
    <div className="container">
      <fieldset style={{ display: "flex", gap: "20px" }}>
        <legend>레이아웃을 선택해주세요</legend>
        <p>
          <input
            type="radio"
            name="test"
            value="1"
            id="button1"
            onChange={radioHandler}
          />
          <label htmlFor="button1">레이아웃 1</label>

          <Imgsize src="Img\레이아웃1.PNG"></Imgsize>
        </p>

        <p>
          <input
            type="radio"
            name="test"
            value="2"
            id="button2"
            onChange={radioHandler}
          />
          <label htmlFor="button2">레이아웃 2</label>

          <Imgsize src="Img\레이아웃3.PNG"></Imgsize>
        </p>

        <p>
          <input
            type="radio"
            name="test"
            value="3"
            id="button3"
            onChange={radioHandler}
          />
          <label htmlFor="button3">레이아웃 3</label>

          <Imgsize src="Img\레이아웃2.PNG"></Imgsize>
        </p>
      </fieldset>
    </div>
  );
};

export default RadioButton;

const Imgsize = styled.img`
  width: 175px;
  height: 175px;
`;
