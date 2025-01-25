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

  selectedExercises: async ({ name, exercisesId }) => {
    const token = localStorage.getItem("token");

    const exerciseIdsJson = JSON.stringify(exercisesId);
  
    try {
      const response = await instance.post(
        "/workouts",
        {
          name,
          exerciseIds: exerciseIdsJson,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Тренировка успешно создана:", response.data);
      toast.success("Тренировка успешно создана!");
    } catch (error) {
      console.error("Ошибка при создании тренировки:", error.response?.data || error.message);
      toast.error("Ошибка при создании тренировки");
    }
  },}));

export default ClickMi;
