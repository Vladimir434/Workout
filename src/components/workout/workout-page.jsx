import Header from "../header/header";
import IconSport from "../../assets/icon-man-and-woman.svg";
import Create from "../../assets/create.svg";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import UseWorkoutStore from "./stope-zustan";
import { toast } from "react-toastify";
import LinkToCreate from "../create a workout or exercise/create";

const WorkoutsPage = () => {
  const { workouts, loading, fetchWorkouts } = UseWorkoutStore();

  try {
    useEffect(() => {
      fetchWorkouts();
    }, [fetchWorkouts]);
  } catch (error) {
    toast.error(error);
    return <p className="text-red-500">Ошибка при загрузке</p>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="relative">
      <Header />

      <div className="w-screen h-[795px] bg-[#000] flex justify-center items-center">
        <div className="text-[#fff] flex flex-col gap-y-[24px] w-[558px]">
          <p className="text-[78px] font-extrabold">
            TRANSFORM YOUR LIFE WITH FITLIFE STUDIO
          </p>
          <p className="font-medium">
            Join FitLife Studio Today and Experience Expert Training,
            Personalized Programs, and a Supportive Community to Achieve Your
            Fitness Goals.
          </p>
        </div>
        <img src={IconSport} alt="no" />
      </div>
      <h2 className="text-[38px] font-semibold text-center mt-[64px]">
        Workouts
      </h2>
      <Link to="/create-workout" className="z-50 fixed top-[90%] left-[90%]">
        <img className="z-50 fixed top-[83%] left-[86%]" src={Create} alt="no" />
      </Link>
      <div className="mb-32">
        {workouts.length > 0 ? (
          <ul>
            {workouts.map((workout) => (
              <Link to={`/workoutpage/${workout.id}`} key={workout.id}>
                <strong>{workout.name}</strong> 
              </Link>
            ))}
          </ul>
        ) : (
          <LinkToCreate title={'Создать тренировку'} url={'/create-workout'}/>
        )}
      </div>
    </div>
  );
};

export default WorkoutsPage;
