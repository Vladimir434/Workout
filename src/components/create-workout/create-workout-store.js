import { create } from "zustand";
import { instance } from "../../api/instonse.api";
import { toast } from "react-toastify";

const ClickMi = create((set) => ({
  workoutes: [],
  loading: false,
  error: null,
  selectedExer:[],

  workoutData: async () => {
    const token = localStorage.getItem("token");
    set({ loading: true, error: null });

    try {
      const response = await instance.get("/exercises", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      set({ workoutes: response.data, loading: false });
    } catch (error) {
      toast.error("Ошибка при получении данных", error);
      set({ error: "Ошибка при получении данных", loading: false });
    }
  },

  selectedExercises: async ({name, exercisesId}) => {
    const token = localStorage.getItem("token");
    set({ loading: true, error: null });
    const arr = [27, 26]

    const d = await JSON.stringify(arr)
    try {
      const selected = instance.post("/workouts", {
        name,
        exerciseIds : d
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log(selected.data);
      
    } catch (error) {
      toast.error("Ошибка при получении данных", error);
    }
  },
}));

export default ClickMi;
