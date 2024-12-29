import { create } from "zustand";
import { instance } from "../../api/instonse.api";
import { toast } from "react-toastify";

const useExerciseStore = create((set) => ({
  exercises: [],
  loading: false,
  error: null,

  addExercise: async ({ name, times, iconPath }) => {
    const token = localStorage.getItem("token");
    set({ loading: true, error: null });

    try {
      const res = await instance.post(
        "/exercises",
        { name, times, iconPath },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set((state) => ({
        exercises: [...state.exercises, res.data],
        loading: false,
      }));
    } catch (err) {
      toast.error("Ошибка при добавлении упражнения", err);
      set({ error: "Ошибка при добавлении упражнения", loading: false });
    }
  },
}));

export default useExerciseStore;
