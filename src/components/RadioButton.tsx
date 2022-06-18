import React, { useState } from "react";
import styled from "styled-components";

const RadioButton = ({
  set,
  select,
  layoutnumber,
}: {
  set:
    | React.Dispatch<React.SetStateAction<number>>
    | React.Dispatch<React.SetStateAction<number | undefined>>;
  select?: number;
  layoutnumber?: number;
}) => {
  const radioHandler = (event: any) => {
    // console.log(event.target.value);
    set(event.target.value);
  };

  console.log(layoutnumber, Number(select));
  return (
    <div className="container">
      <fieldset style={{ display: "flex", gap: "20px" }}>
        <legend>레이아웃을 선택해주세요</legend>

        <label htmlFor="button1">
          <input
            type="radio"
            name="test"
            value="1"
            id="button1"
            defaultChecked={layoutnumber === 1}
            onChange={radioHandler}
          />
          <Imgsize src="Img\레이아웃1.PNG"></Imgsize>
        </label>

        <label htmlFor="button2">
          <input
            type="radio"
            name="test"
            value="2"
            id="button2"
            defaultChecked={layoutnumber === 2}
            onChange={radioHandler}
          />
          <Imgsize src="Img\레이아웃3.PNG"></Imgsize>
        </label>

        <label htmlFor="button3">
          <input
            type="radio"
            name="test"
            value="3"
            id="button3"
            defaultChecked={layoutnumber === 3}
            onChange={radioHandler}
          />
          <Imgsize src="Img\레이아웃2.PNG"></Imgsize>
        </label>
      </fieldset>
    </div>
  );
};

export default RadioButton;

const Imgsize = styled.img`
  width: 175px;
  height: 175px;
`;
