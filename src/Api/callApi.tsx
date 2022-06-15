import axios from "axios";
import React from "react";

export default axios.create({
  baseURL: "http://3.35.233.99/api",
  timeout: 1000,
});
