import Workout from '../../assets/workout.svg'
import Profile from '../../assets/Profile.svg'
import Exit from '../../assets/exit.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-[100%] h-auto sm:shadow-2xl  flex justify-center ">
      <header className="w-[90%] h-[60px]  flex items-center justify-between ">
        <h2 className="text-[20px] font-semibold"> UniWorkout</h2>
        <nav className="flex gap-x-[12px]  ">
          <Link to="#" className=' hidden sm:block'><img src={Workout} alt="" /></Link>
          <Link to="#" className=' hidden sm:block'><img src={Profile} alt="" /></Link>
          <Link to="/login"><img src={Exit} alt=""/></Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
