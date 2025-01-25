import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import IconWorkoutDetails from "../../assets/icon-workout-details.svg";
import IconBack from "../../assets/back.svg";
import Workout from "../../assets/workout.svg";
import Profile from "../../assets/Profile.svg";
import Header from "../header/header";
import WorkoutDetailsStore from "./workout-details-store";

const WorkoutDetails = () => {
  const { id } = useParams();
  const { workout, fetchWorkout, deleteWorkout } = WorkoutDetailsStore();
  const navigate = useNavigate()
  useEffect(() => {
    if (id) {
      fetchWorkout(id);
    }
  }, [id, fetchWorkout]);
  console.log(workout);

  const handleDelete = async () => {
    try {
      await deleteWorkout(id);
      navigate('/workoutpage')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div
        className="w-full h-[300px] sm:h-[539px] bg-no-repeat bg-cover relative mb-[56px] rounded-[11px] "
        style={{ backgroundImage: `url(${IconWorkoutDetails})` }}
      >
        <Link to={"/workoutpage"} className="absolute left-[52px] top-[8%]">
          {" "}
          <img src={IconBack} alt="no image" />
        </Link>
        <div className="absolute top-[40%] sm:top-[70%] left-[30px] vs:left-[56px]">
          <h3 className=" text-[28px] sm:text-[32px] font-normal text-[#DEB6B6] ">
            {workout?.minutes}.min
          </h3>
          <h2 className="text-[#fff] text-[42px] font-normal sm:text-[52px] sm:font-bold">
            Силовая тренировка
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-y-[30px] w-full mb-[38px] pl-[20px] pr-[20px] ">
        {workout?.exercises?.map((item) => (
          <div
            key={item.id}
            className="max-w-[775px] min-w-[290px] w-full h-[61px] rounded-[10px] text-[#fff] bg-[#511734] mx-auto flex justify-between items-center pl-[33px] pr-[13px] "
          >
            <h4 className="text-[24px] font-normal ">{item?.name}</h4>
            <img
              src={`http://localhost:8000${item.iconPath}`}
              alt={item.iconPath}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex pl-[20px] pr-[20px] ">
        <button
          onClick={() => handleDelete()}
          className="max-w-[775px] min-w-[290px] w-full h-[42px] text-center rounded-[10px] text-[#fff] bg-[#E32F2F] mx-auto  mb-[130px]"
        >
          Удалить тренировку
        </button>
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

export default WorkoutDetails;
