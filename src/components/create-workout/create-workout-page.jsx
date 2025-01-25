import { useEffect, useState } from "react";
import ClickMi from "./create-workout-store";
import Header from "../header/header";
import IconWorkout from "../../assets/iconWorkoutCreate.svg";
import LinkToCreate from "../create a workout or exercise/create";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const WorkoutList = () => {
  const { workoutes, workoutData, loading, error, selectedExercises } =
    ClickMi();
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    workoutData();
  }, [workoutData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const categories = {
    all: "",
    chest: "/uploads/exercisess/chest.svg",
    shoulders: "/uploads/exercisess/shoulders.svg",
    biceps: "/uploads/exercisess/biceps.svg",
    legs: "/uploads/exercisess/legs.svg",
    hit: "/uploads/exercisess/hit.svg",
  };

  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (name && selectedIds.length > 0) {
      await selectedExercises({ name, exercisesId: selectedIds });
      setName("");
      setSelectedIds([]);
    } else {
      toast("Введите название и выберите хотя бы одно упражнение");
    }
  };
  const filteredWorkouts = workoutes.filter((exercise) => {
    const matchesName = exercise.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? exercise.iconPath === categories[selectedCategory]
      : true;
    return matchesName && matchesCategory;
  });

  return (
    <div>
      <Header />
      <div
        className="relative w-full h-[244px] sm:h-[410px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${IconWorkout})` }}
      >
        <h1 className=" text-[#fff] absolute top-[120px] sm:top-[260px] left-[10px] sm:left-[50px] text-[28px] sm:text-[42px] md:text-[52px] font-normal sm:font-bold">
          Создание новой тренировки
        </h1>
      </div>
      <div className="flex flex-col mx-auto max-w-[576px] w-full gap-y-[10px] mt-[44px] pl-[20px] pr-[20px] ">
        <label htmlFor="name">Название</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="max-w-[576px] h-[32px] border border-[#5065EB] rounded-[6px] pl-[17px]"
          type="text"
          placeholder="Введите название тренировки"
        />
      </div>
      <form onSubmit={onHandleSubmit} className="pl-[20px] pr-[20px]">
        <div className="max-w-[964px] pl-[20px] pr-[20px] vs:pl-[40px] vs:pr-[40px] pt-[32px] mt-[44px] min-h-[500px] bg-[#F2F2F2] mx-auto rounded-[31px]">
          <h2 className="text-[24px] font-normal text-center mb-[57px]">
            Выберите упражнения для тренировки
          </h2>
          <div className="flex flex-col vs:flex-row gap-4 mb-4 items-center sm:justify-center">
            <input
              type="text"
              placeholder="Поиск..."
              className=" w-[196px] h-[32px] text-[#4E4E4E] text-[14px] font-normal border border-[#5065EB] outline-none rounded pl-[5px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={selectedCategory}
              className="w-[196px] h-[32px] text-[#4E4E4E] text-[14px] font-normal border border-[#5065EB] outline-none  rounded"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Все категории</option>
              <option value="chest">Грудь</option>
              <option value="shoulders">Плечи</option>
              <option value="biceps">Руки</option>
              <option value="legs">Ноги</option>
              <option value="hit">Скакалка</option>
            </select>
          </div>
          <div className="grid grid-cols-1 justify-items-center vs:grid-cols-2 sm:justify-items-center md:grid-cols-3 lg:grid-cols-4  gap-x-[17px] gap-y-[18px] overflow-y-auto pb-[10px] mb-[50px] mt-[44px]">
            {filteredWorkouts.length === 0 ? (
              <div className="col-span-4 flex items-center justify-center">
                <LinkToCreate />
              </div>
            ) : (
              filteredWorkouts.map((exercise) => (
                <label
                  className="w-[202px] h-[110px] rounded-[14px] bg-white flex justify-center items-center"
                  key={exercise.id}
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
            )}
          </div>
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
            className="w-[100%] h-[36px] max-w-[567px] mt-[17px] mb-[176px] rounded-[11px] text-white bg-[#5065EB]"
          >
            Создать
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutList;
