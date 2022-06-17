import axios from "axios";
import React from "react";
import { FieldValues } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { tokenState } from "../recoil/store";
import { jwtUtils } from "../utils/JwtUtils";
import setupInterceptorsTo from "./Interceptiors";

const baseApi = axios.create({
  baseURL: "http://3.35.233.99/api",
  timeout: 1000,
});

const callApi = setupInterceptorsTo(baseApi);

const singUpApi = async (data: FieldValues) => {
  const sua = await callApi.post("/register", data);
  return sua;
};

const singInApi = async (data: FieldValues) => {
  const sia = await callApi.post("/login", data);
  return sia;
};

const writeApi = async (data: FormData) => {
  // console.log("aa", tokenUse);
  const wa = await callApi.post("/board", data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return wa;
};

const watchApi = async () => {
  const wca = await callApi.get("/boards");
  return wca;
};

const deleteApi = async (boardId: number) => {
  const da = await callApi.delete(`/board/${boardId}`);
  return da;
};

export const registerApi = {
  singUpApi: (data: FieldValues) => singUpApi(data),
  singInApi: (data: FieldValues) => singInApi(data),
};

export const boardApi = {
  writeApi: (data: FormData) => writeApi(data),
  watchApi: () => watchApi(),
  deleteApi: (boardId: number) => deleteApi(boardId),
};
