import axios from "axios";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const countState = atom({
  key: "countState",
  default: 1,
});

const { persistAtom } = recoilPersist();
export const tokenState = atom({
  key: "tokenState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
