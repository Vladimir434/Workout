import { useState } from "react";
import useExerciseStore from "./store";
import Workout from "../../assets/workout.svg";
import Profile from "../../assets/Profile.svg";
import IconExercise from "../../assets/icon-exercise.svg";
import Header from "../header/header";
import { Link } from "react-router-dom";

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
    await addExercise({ name, times: Number(times), iconPath: iconPath.name });
    setName("");
    setTimes("");
  };

  return (
    <>
      <Header />
      <section
        className="relative w-full h-[244px] sm:h-[410px] bg-no-repeat bg-cover rounded-[11px]"
        style={{ backgroundImage: `url(${IconExercise})` }}
      >
        <h1 className=" text-[#fff] absolute top-[120px] sm:top-[260px] left-[10px] sm:left-[50px] text-[28px] sm:text-[42px] md:text-[52px] font-normal sm:font-bold">
          Создание нового упражнения
        </h1>
      </section>
      <div className="flex justify-center items-center">
        <form
          className="p-[20px] max-w-[678px] w-full mt-[88px] mb-[296px] flex flex-col justify-center "
          onSubmit={handleSubmit}
        >
          <div>
            <label className=" text-[14px] font-normal flex flex-col gap-y-[10px] mb-[10px]">
              Название
            </label>
            <input
              required
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
              required
              className="text-[14px] font-normal pl-[16px] w-full border-[1px] border-[#5065EB] rounded-[6px] h-[32px] outline-none mb-[33px] sm:mb-[25px]"
              type="number"
              placeholder="Количество повторений"
              value={times}
              onChange={(e) => setTimes(e.target.value)}
            />
          </div>

          <div className="flex gap-x-[10px] mb-[44px] sm:mb-[52px] justify-center">
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
      <footer className=" sm:hidden w-[100%] h-[60px] flex justify-center items-center gap-x-[52px] fixed bottom-0">
          <Link to={'/workoutpage'} className="flex flex-col items-center justify-center">
            <img src={Workout} alt="not foud" />
            <h2 className="font-semibold text-[14px]">Workout</h2>
          </Link>
          <Link to={'/'} className="flex flex-col items-center justify-center">
            <img src={Profile} alt="not foud" />
            <h2 className="font-semibold text-[14px]">Workout</h2>
          </Link>
        </footer>

    </>
  );
};

export default ExerciseForm;
