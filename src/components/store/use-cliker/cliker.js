import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useClicker = create(persist((set) => ({
    count: 0,
    increaseCount(){
        set(state => ({count: state.count +1}))
    }
}),{name: 'chyng'}))