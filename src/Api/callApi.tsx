import axios from "axios";

import { FieldValues } from "react-hook-form";

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
  const wta = await callApi.post("/board", data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return wta;
};

const watchApi = async () => {
  const wca = await callApi.get("/boards");
  return wca;
};

const deleteApi = async (boardId: number) => {
  const dta = await callApi.delete(`/board/${boardId}`);
  return dta;
};

const reviseApi = async (boardId: number, formData: FormData) => {
  // console.log(formData.get("content"));
  // console.log(formData.get("layout"));
  // console.log(formData.get("image"));
  const rva = await callApi.put(`/board/${boardId}`, formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return rva;
};

const likeApi = async (boardId: number) => {
  const lka = await callApi.get(`/board/${boardId}/like`);
  return lka;
};
export const registerApi = {
  singUpApi: (data: FieldValues) => singUpApi(data),
  singInApi: (data: FieldValues) => singInApi(data),
};

export const boardApi = {
  writeApi: (data: FormData) => writeApi(data),
  watchApi: () => watchApi(),
  deleteApi: (boardId: number) => deleteApi(boardId),
  reviseApi: (boardId: number, formData: FormData) =>
    reviseApi(boardId, formData),
  likeApi: (boardId: number) => likeApi(boardId),
};
