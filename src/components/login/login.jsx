/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../api/auth.api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isCheck, setisCheck] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email && password) {
      setEmail(email);
      setPassword(password);
      setisCheck(true);
    }
  }, []);

  const onHandle = async (e) => {
    e.preventDefault();
    try {
      await authApi.login({
        email,
        password,
        nav,
      });

      if (isCheck) {
        localStorage.setItem('email', email)
      }else {
        localStorage.removeItem('email')
      }
    } catch (error) {
      toast.error('Произошла ощибка при вводе');
      
    }
  };

  return (
    <>
      <section className="bg-[#fff] sm:bg-[#E9E9E9] min-h-dvh flex justify-center items-center">
        <form
          onSubmit={onHandle}
          className="sm:shadow-2xl p-[12px] sm:p-[46px] w-full sm:w-[85%] lg:w-[46%] rounded-[23px] bg-[#fff] max-w-[672px]"
        >
          <h1 className="mb-[30px] text-[32px] text-center font-bold">
            Вход в аккаунт
          </h1>
          <div className="flex flex-col gap-y-[3px] sm:gap-y-[8px]">
            <label htmlFor="">Почта</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Введите вашу почту"
              className="h-[31px] rounded-[6px] border border-[#5065EB] mb-[13px] pl-[14px]"
            />
            <label htmlFor="">Пароль</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="Введите ваш пароль"
              className="h-[31px] rounded-[6px] border border-[#5065EB] pl-[14px]"
            />
          </div>
          <label className="flex justify-center mt-[24px] mb-[41px] sm:mt-[19px] sm:mb-[31px] gap-x-[6px]">
            <input
              type="checkbox"
              onChange={(e) => setisCheck(e.target.checked)}
              checked={isCheck}
            />
            Запомнить меня
          </label>
          <div className="flex justify-center items-center">
            <button className="rounded-[11px] w-[100%] h-[35px] bg-[#5065EB] text-[#fff] mb-[41px] sm:mb-[16px]">
              Войти
            </button>
          </div>
          <div className="text-center">
            Нету аккаунта?
            <Link to="/registration" className="text-[#325BC2]">
              Создать
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
