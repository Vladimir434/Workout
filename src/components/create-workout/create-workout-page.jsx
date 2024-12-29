import { useEffect, useState } from "react";
import ClickMi from "./create-workout-store"; // Путь к Zustand Store
import Header from "../header/header";
import IconWorkout from "../../assets/iconWorkoutCreate.svg";
import LinkToCreate from "../create a workout or exercise/create";
import { Link } from "react-router-dom";

const WorkoutList = () => {
  const { workoutes, workoutData, loading, error, selectedExercises } =
    ClickMi();

  const [name, setName] = useState("");
  const [selectedIds, setSelectedIds] = useState([]); // Хранение выбранных ID
  const [filter, setFilter] = useState(""); // Состояние для фильтрации

  useEffect(() => {
    workoutData();
  }, [workoutData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const filteredWorkoutes = workoutes.filter((exercise) =>
    exercise.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    selectedExercises({ name, exercisesId: selectedIds });
  };

  return (
    <div>
      <Header />
      <div
        className="relative w-full h-[410px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${IconWorkout})` }}
      >
        <h1 className="absolute top-[80%] text-[52px] text-[#fff] font-bold">
          Создание новой тренировки
        </h1>
      </div>
      <div className="flex flex-col mx-auto w-[576px] gap-y-[10px] mt-[44px]">
        <label htmlFor="workout-name">Название</label>
        <input
          id="workout-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="max-w-[576px] h-[32px] border border-[#5065EB] rounded-[6px]"
          type="text"
          placeholder="Введите название тренировки"
        />
        <input
          type="text"
          placeholder="Фильтровать по названию"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-[576px] h-[32px] border border-[#5065EB] rounded-[6px] mt-[20px]"
        />
      </div>
      <form onSubmit={onHandleSubmit}>
        <div
          className="max-w-[964px] pl-[40px] pr-[40px] pt-[32px] h-[500px] bg-[#F2F2F2] mx-auto grid grid-cols-4 justify-items-center items-center w-full content-start gap-x-[17px] gap-y-[18px] overflow-y-auto pb-[10px] mb-[50px] mt-[44px]"
        >
          {filteredWorkoutes.length > 0 ? (
            filteredWorkoutes.map((exercise) => (
              <label
                key={exercise.id}
                className="w-[202px] h-[110px] rounded-[14px] bg-white flex justify-center items-center"
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              >
                <div className="w-[80%] flex justify-between">
                  <div className="flex flex-col gap-y-[2px]">
                    <div className="text-[18px] font-[600]">
                      {exercise.name}
                    </div>
                    <div className="text-[14px] font-[400] text-[#81809E]">
                      {exercise.times} times
                    </div>
                  </div>
                  <div className="relative w-[60px] flex flex-col items-end justify-center gap-y-[14px] left-[4px]">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(exercise.id)}
                      onChange={() => handleCheckboxChange(exercise.id)}
                    />
                    <img
                      className="filter invert opacity-100 w-[50px]"
                      src={`http://localhost:8000${exercise.iconPath}`}
                      alt={exercise.name}
                    />
                  </div>
                </div>
              </label>
            ))
          ) : (
            <LinkToCreate />
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link
            to="/createexercise"
            className="font-normal text-[12px] text-[#5065EB]"
          >
            Создать новое упражнение
          </Link>
          <button
            type="submit"
            className="w-[100%] h-[36px] max-w-[567px] rounded-[11px] text-white bg-[#5065EB]"
          >
            Создать
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutList;

