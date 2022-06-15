import axios from "axios";
import React from "react";
import { FieldValues } from "react-hook-form";

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

export const registerApi = {
  singUpApi: (data: FieldValues) => singUpApi(data),
  singInApi: (data: FieldValues) => singInApi(data),
};
