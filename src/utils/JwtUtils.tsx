import jwtDecode from "jwt-decode";
import { TOkenList } from "../Types/Interface";

export class jwtUtils {
  static isAuth(token: string) {
    if (!token) {
      return false;
    }
    const decoded: TOkenList = jwtDecode(token);
    // console.log(decoded);
    if (decoded.exp > new Date().getTime() / 1000) {
      return true;
    } else {
      return false;
    }
  }
  //
  static getId(token: string) {
    const decoded: TOkenList = jwtDecode(token);
    return decoded.sub;
  }
}
