import styled from "styled-components";
import React from "react";

const Container = styled.div`
  width: 100%;
  height: 350px;
`;

const FillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function ImagePicker() {
  return (
    <Container>
      <FillImage />
    </Container>
  );
}
