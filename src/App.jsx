import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./authContext/authContext";
import MainPage from "./components/main-page/page";
import Registration from "./components/registration/registration";
import Login from "./components/login/login";
import WithAuth from "./Hoc/withAuth";
import WorkoutPage from "./components/workout/workout-page";
import ExerciseForm from "./components/create-xercise/exercise-creation-page";
import CreateWorkout from "./components/create-workout/create-workout-page";
import WorkoutDetails from "./components/workiut-details/workout-details";

function App() {
  // useEffect(() => {
  //   const getPost = async() => {
  //     const res = await axios.post('http://localhost:8000/api/auth/register/', {email: 'vladimir@gmail.com', first_name:' Aimir', last_name: 'kurmanbekov', password: '5645'});
  //     console.log(res);
  //   }
  //   getPost()
  // }, [])
  // const [data, setData] = useState([]);
  // const providerData = {
  //   onChange: setData,
  //   ptoducts: data,
  // };

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<WithAuth><MainPage/></WithAuth> }/>
          <Route path="/workoutpage" element={<WithAuth> <WorkoutPage/></WithAuth>}/>
          <Route path="/workoutpage/:id" element={<WithAuth> <WorkoutDetails/></WithAuth>}/>
          <Route path="/createexercise" element={<WithAuth><ExerciseForm/></WithAuth>}/>
          <Route path="/create-workout" element={<WithAuth><CreateWorkout/></WithAuth>}/>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
