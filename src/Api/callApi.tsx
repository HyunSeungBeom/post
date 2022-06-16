import axios from "axios";
import React from "react";
import { FieldValues } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { tokenState } from "../recoil/store";

const callApi = axios.create({
  baseURL: "http://3.35.233.99/api",
  timeout: 1000,
});

const singUpApi = async (data: FieldValues) => {
  const sua = await callApi.post("/register", data);
  return sua;
};

const singInApi = async (data: FieldValues) => {
  const sia = await callApi.post("/login", data);
  return sia;
};

const writeApi = async (data: FormData, tokenUse: string) => {
  // console.log("aa", tokenUse);
  const wa = await callApi.post("/board", data, {
    headers: {
      "X-AUTH-TOKEN": tokenUse,
      "content-type": "multipart/form-data",
    },
  });
  return wa;
};

const watchApi = async () => {
  const bsa = await callApi.get("/boards");
  return bsa;
};

export const registerApi = {
  singUpApi: (data: FieldValues) => singUpApi(data),
  singInApi: (data: FieldValues) => singInApi(data),
};

export const boardApi = {
  writeApi: (data: FormData, tokenUse: string) => writeApi(data, tokenUse),
  watchApi: () => watchApi(),
};
