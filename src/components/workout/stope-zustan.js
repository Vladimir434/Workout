import { create } from "zustand";
import { instance } from "../../api/instonse.api";

const UseWorkoutStore = create((set) => ({
  workouts: [],
  loading: false,

  fetchWorkouts: async () => {
    const token = localStorage.getItem('token')
    set({ loading: true, error: null });
      const res = await instance.get("/workouts",{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      });
      set({ workouts: res.data, loading: false });
      console.log(res.data);
      
  },

}));

export default UseWorkoutStore;