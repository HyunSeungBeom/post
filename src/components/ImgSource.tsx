import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export function ImgSource({
  set,
}: {
  set: React.Dispatch<React.SetStateAction<File | undefined>>;
}) {
  const [imagePreview, setImagePreview] = useState("");
  const { watch, register } = useForm();
  const image = watch("image");

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
      set(file);
    }
  }, [image]);

  return (
    <div style={{ marginTop: "10px" }}>
      <legend style={{ fontWeight: "bold", color: "red", fontSize: "30px" }}>
        파일을 선택해주세요 !
      </legend>
      <img src={imagePreview} />
      <div>
        <input {...register("image")} id="picture" type="file" />
      </div>
    </div>
  );
}
