import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import styled from "styled-components";

export default function ImageFile({ text }: { text: string }) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <MainButton onClick={onImageUpload} {...dragProps}>
              {text}
            </MainButton>

            {imageList.map((image, index) => {
              return (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="200" />
                  <div className="image-item__btn-wrapper">
                    <MainButton onClick={() => onImageUpdate(index)}>
                      바꾸기
                    </MainButton>
                    <MainButton onClick={() => onImageRemove(index)}>
                      제거하기
                    </MainButton>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export const MainButton = styled.button`
  width: 120px;
  font-size: 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: gray;
  }
`;
