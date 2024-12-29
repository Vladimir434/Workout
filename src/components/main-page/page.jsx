import IconUser from "../../assets/iconUser.svg";
import MaskGroup from "../../assets/MaskGroup.svg";
import MaskGroup2 from "../../assets/MaskGroup2.svg";
import Workout from "../../assets/workout.svg";
import Profile from "../../assets/Profile.svg";
import Header from "../header/header";
import { useEffect, useState } from "react";
import { userApi } from "../../api/profiile.api";

const MainPage = () => {
  const [profile, setProfile] = useState();
  const [isfeht, setIsfeht] = useState(true);
  console.log(profile);

  useEffect(() => {
    const detProfile = async () => {
      setIsfeht(true);
      const data = await userApi.getProfile();
      setProfile(data);
      setIsfeht(false);
    };
    detProfile();
  }, []);
  if (isfeht) {
    return <h1>looding...</h1>;
  }
  return (
    <>
      <Header />
      <div className="min-h-dvh w-[100%]">
        <div className=" w-[100%] h-[378px] flex justify-center items-center bg-[url('/src/assets/icon.svg')] bg-no-repeat bg-cover">
          <div className="flex flex-col items-center justify-center gap-y-[26px] text-[#fff] ">
            <div className="flex flex-col justify-center items-center gap-y-[26px]">
              <img
                className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]"
                src={IconUser}
                alt=""
              />
              <h3 className="text-[30px] font-bold ">{profile.name}</h3>
            </div>
            <div className="flex gap-x-[36px] sm:gap-x-[56px]">
              {profile.statistics.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <h1 className="text-[26px] font-bold">{item.label}</h1>
                  <p className="text-[26px] font-normal">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" mb-[67px] flex items-center flex-col sm:flex-row justify-center gap-x-[42px] mt-[100px] ">
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
