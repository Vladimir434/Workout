/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../api/auth.api";
import { toast } from "react-toastify";

const Registration = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email && password) {
      setEmail(email);
      setPassword(password);
      setIsCheck(true);
    }
  }, []);
  const navigate = useNavigate();

  const onHandle = async (e) => {
    e.preventDefault();
    try {
      await authApi.register({
        email,
        first_name: name,
        last_name: lastName,
        password,
        nav: navigate,
      });

      if (isCheck) {
        localStorage.setItem("email", email);
      } else {
        localStorage.removeItem("email");
      }
    } catch (error) {
      toast.error("Произошла ошибка");
    }
  };

  return (
    <section className="bg-[#fff] sm:bg-[#E9E9E9] min-h-dvh flex justify-center items-center">
      <form
        onSubmit={onHandle}
        className="sm:shadow-2xl p-[12px] sm:p-[46px] w-full sm:w-[85%] lg:w-[46%] rounded-[23px] max-w-[672px] bg-[#fff]"
      >
        <h1 className="mb-[30px] text-[32px] text-center font-bold">
          Регистрация
        </h1>
        <div className="w-[100%] flex flex-col gap-y-[8px]">
          <label>Имя</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            placeholder="Введите ваше имя"
            className="h-[31px] rounded-[6px] border border-[#5065EB] mb-[22px] sm:mb-[13px] pl-[14px]"
          />
        </div>
        <div className="w-[100%] flex flex-col gap-y-[8px]">
          <label>Фамилия</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            required
            placeholder="Введите вашу фамилию"
            className="h-[31px] rounded-[6px] border border-[#5065EB] mb-[22px] sm:mb-[13px] pl-[14px]"
          />
        </div>
        <div className="w-[100%] flex flex-col gap-y-[8px]">
          <label>Почта</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Введите вашу почту"
            className="h-[31px] rounded-[6px] border border-[#5065EB] mb-[22px] sm:mb-[13px] pl-[14px]"
          />
        </div>
        <div className="w-[100%] flex flex-col gap-y-[8px]">
          <label>Пароль</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Введите ваш пароль"
            className="h-[31px] rounded-[6px] border border-[#5065EB] mb-[22px] sm:mb-[13px] pl-[14px]"
          />
        </div>
        <label className="flex justify-center mt-[19px] mb-[66px] sm:mb-[31px] gap-x-[6px]">
          <input type="checkbox" checked={isCheck} onChange={(e) =>  setIsCheck(e.target.checked)}/>
          Запомнить меня
        </label>
        <div className="flex justify-center items-center">
          <button className="rounded-[11px] w-[100%] h-[35px] bg-[#5065EB] text-[#fff] mb-[32px] sm:mb-[16px]">
            Создать аккаунт
          </button>
        </div>
        <div className="text-center">
          Нету аккаунта?
          <Link to={"/login"} className="text-[#325BC2]">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Registration;
