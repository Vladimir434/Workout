/* eslint-disable no-constant-condition */
import { instance } from "./instonse.api";
export const authApi = {
  async register({ last_name, first_name, email, password, nav }) {
    try {
      const res = await instance.post("/auth/register/", {
        first_name,
        last_name,
        password,
        email,
      });
      if (true) {
        localStorage.setItem("token", res.data.token);
      }
      nav("/");
    } catch (error) {
      alert(error);
    }
  },
};
