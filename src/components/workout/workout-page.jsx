import Header from "../header/header";
import IconSport from "../../assets/icon-man-and-woman.svg";
import Create from "../../assets/create.svg";
import Workout from "../../assets/workout.svg";
import Profile from "../../assets/Profile.svg";


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
        <div className="text-[#fff] flex flex-col p-[51px] gap-y-[24px] w-[558px]">
          <p className="text-[40px] min-w-[212px] md:w-full sm:w-full sm:text-[78px] font-semibold md:font-extrabold">
            TRANSFORM YOUR LIFE WITH FITLIFE STUDIO
          </p>
          <p className="text-[20px] min-w-[212px] md:w-full lg:w-full font-medium">
            Join FitLife Studio Today and Experience Expert Training,
            Personalized Programs, and a Supportive Community to Achieve Your
            Fitness Goals.
          </p>
        </div>
        <img className=" hidden xl:block" src={IconSport} alt="no" />
      </div>
      <h2 className="text-[38px] font-semibold text-center mt-[64px]">
        Workouts
      </h2>
      <Link to="/create-workout" className="z-50 fixed top-[90%] left-[90%]">
        <img
          className="z-50 fixed top-[83%] left-[75%] sm:left-[88%]"
          src={Create}
          alt="no"
        />
      </Link>
      <div className="mx-auto p-[20px] w-[80%] mb-32 max-w-[1142px] grid  grid-cols-1 justify-items-center md:w-[790px] md:grid-cols-3 xl:grid-cols-5 xl:w-[85%] gap-x-[33px] gap-y-[25px]">
        {workouts.length === 0 ? (
          <div className="col-span-5 flex items-center justify-center">
            <LinkToCreate
              title={"Создать тренировку"}
              url={"/create-workout"}
            />
          </div>
        ) : (
          <>
            {workouts.map((workout) => (
              <div className="w-[232px] md:w-[212px] h-[110px] rounded-[13px] flex items-center justify-center gap-y-[9px]"
              style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              key={workout.id}>
                <Link to={`/workoutpage/${workout.id}`}>
                  <h3 className="text-[18px] font-semibold ">{workout.name}</h3>
                  <h3 className="text-[#81809E] text-[14px] font-normal">
                    {workout.exercises.length} Exercises • <span>22 Min</span>
                  </h3>
                </Link>
              </div>
            ))}
          </>
        )}
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

    </div>
  );
};

export default WorkoutsPage;
