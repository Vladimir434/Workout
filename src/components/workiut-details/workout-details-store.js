import { create } from "zustand";
import { instance } from "../../api/instonse.api";
import { toast } from "react-toastify";

const WorkoutDetailsStore = create((set) => ({
  workout: null,
  
  fetchWorkout: async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await instance.get(`/workouts/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ workout: res.data });
    } catch (error) {
      toast.error("Произошла ошибка при получении данных",error);
    }
  },

  deleteWorkout: async (id) => {
    try {
      const token = localStorage.getItem("token");
      await instance.delete(`/workouts/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ workout: null });
    } catch (error) {
      toast.error("Произошла ошибка",error);
    }
  },
}));

export default WorkoutDetailsStore;
