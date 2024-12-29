/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { toast } from "react-toastify";
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
      toast.error('Произошла ошибка проверьте пороль или почту');
    }
  },
  async login({ email, password, nav }) {
    try {
      const res = await instance.post("/auth/login/", {
        password,
        email,
      });
      if (true) {
        localStorage.setItem("token", res.data.token);
      }
      nav("/");
    } catch (error) {
       toast.error('Произошла ошибка проверьте пороль или почту');
    }
  },
};
