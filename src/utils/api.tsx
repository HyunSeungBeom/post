import axios from "axios";
import { jwtUtils } from "./JwtUtils";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "" : "",
});

/**
 1. 요청 인터셉터
 2개의 콜백 함수를 받습니다.
 */
