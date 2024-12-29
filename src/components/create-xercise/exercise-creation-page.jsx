import { useState } from "react";
import useExerciseStore from "./store";

import IconExercise from "../../assets/icon-exercise.svg";
import Header from "../header/header";

const iconOptions = [
  {
    path: "http://localhost:8000/uploads/exercisess/chest.svg",
    name: "/uploads/exercisess/chest.svg",
  },
  {
    path: "http://localhost:8000/uploads/exercisess/shoulders.svg",
    name: "/uploads/exercisess/shoulders.svg",
  },
  {
    path: "http://localhost:8000/uploads/exercisess/biceps.svg",
    name: "/uploads/exercisess/biceps.svg",
  },
  {
    path: "http://localhost:8000/uploads/exercisess/legs.svg",
    name: "/uploads/exercisess/legs.svg",
  },
  {
    path: "http://localhost:8000/uploads/exercisess/hit.svg",
    name: "/uploads/exercisess/hit.svg",
  },
];

const ExerciseForm = () => {
  const { addExercise } = useExerciseStore();
  const [name, setName] = useState("");
  const [times, setTimes] = useState("");
  const [iconPath, setIconPath] = useState({
    path: "http://localhost:8000/uploads/exercises/chest.svg",
    name: "/uploads/exercisess/chest.svg",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExercise({ name, times: Number(times), iconPath:iconPath.name });
    setName("");
    setTimes("");
  };

  return (
    <>
      <Header />
      <section
        className="relative w-full h-[410px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${IconExercise})` }}
      >
        <h1 className=" text-[#fff] absolute top-[300px] left-[50px] text-[52px] font-bold">
          Создание нового упражнения
        </h1>
      </section>
      <div className="flex justify-center items-center">
        <form
          className=" max-w-[678px] w-[46%] mt-[88px] mb-[296px] flex flex-col justify-center "
          onSubmit={handleSubmit}
        >
          <div>
            <label className=" text-[14px] font-normal flex flex-col gap-y-[10px] mb-[10px]">
              Название
            </label>
            <input
              className="text-[14px] font-normal pl-[16px] w-full border-[1px] border-[#5065EB] rounded-[6px] h-[32px] outline-none mb-[25px]"
              type="text"
              placeholder="Название упражнения"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className=" text-[14px] font-normal flex flex-col gap-y-[10px] mb-[10px]">
              Количество повторений
            </label>
            <input
              className="text-[14px] font-normal pl-[16px] w-full border-[1px] border-[#5065EB] rounded-[6px] h-[32px] outline-none mb-[25px]"
              type="number"
              placeholder="Количество повторений"
              value={times}
              onChange={(e) => setTimes(e.target.value)}
            />
          </div>

          <div className="flex gap-x-[10px] mb-[20px] justify-center">
            {iconOptions.map((icon) => (
              <div
                key={icon.path}
                onClick={() => setIconPath(icon)}
                style={{
                  cursor: "pointer",
                  border:
                    iconPath.path === icon.path
                      ? "2px solid blue"
                      : "2px solid transparent",
                  padding: "5px",
                }}
              >
                <img
                  className="w-6 h-6 filter invert sepia brightness-100"
                  src={icon.path}
                  alt={icon.label}
                  width="50"
                  height="50"
                  title={icon.label}
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full h-[35px] border-none rounded-[11px] bg-[#5065EB] text-[#fff]"
          >
            Создать
          </button>
        </form>
      </div>
    </>
  );
};

export default ExerciseForm;
