import IconUser from "../../assets/iconUser.svg";
import MaskGroup from "../../assets/MaskGroup.svg";
import MaskGroup2 from "../../assets/MaskGroup2.svg";
import Workout from "../../assets/workout.svg";
import Profile from "../../assets/Profile.svg";
import Header from "../header/header";

const MainPage = () => {
  return (
    <>
    <Header/>
    <div className="min-h-dvh w-[100%]">
      <div className=" w-[100%] h-[378px] flex justify-center items-center bg-[url('/src/assets/icon.svg')] bg-no-repeat bg-cover">
        <div className="flex flex-col items-center justify-center gap-y-[26px] text-[#fff] ">
          <div className="flex flex-col justify-center items-center gap-y-[26px]">
            <img className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]" src={IconUser} alt="" />
            <h3 className="text-[30px] font-bold ">Vladislav Kuertov</h3>
          </div>
          <div className="flex gap-x-[36px] sm:gap-x-[56px]">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[26px] font-bold">Minutes</h1>
              <p className="text-[26px] font-normal">2000</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[26px] font-bold">Workouts</h1>
              <p className="text-[26px] font-normal">20</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[26px] font-bold">Kg</h1>
              <p className="text-[26px] font-normal">1000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="  flex items-center flex-col sm:flex-row justify-center gap-x-[42px] mt-[100px] ">
        <div className="flex flex-col items-center justify-center gap-y-[13px]">
          <h2 className="text-[18px] font-normal">Before</h2>
          <img src={MaskGroup} alt="not foud" />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[13px]">
          <h2 className="text-[18px] font-normal">After</h2>
          <img src={MaskGroup2} alt="no" />
        </div>
      </div>
      <footer className=" sm:hidden w-[100%] h-[60px] flex justify-center items-center gap-x-[52px] fixed bottom-0">
        <div className="flex flex-col items-center justify-center">
          <img src={Workout} alt="not foud" />
          <h2 className="font-semibold text-[14px]">Workout</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={Profile} alt="not foud" />
          <h2 className="font-semibold text-[14px]">Workout</h2>
        </div>
      </footer>
    </div>
    </>
  );
};

export default MainPage;
