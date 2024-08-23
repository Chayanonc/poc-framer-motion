import { create } from "zustand";

interface IFloor {
  image: string;
  floor: number;
}

interface IFloorStore {
  floor: IFloor;
  planType: string;
  setFloor: (floor: IFloor) => void;
  setPlanType: (pType: string) => void;
}

const initialState = {
  floor: {
    image: "https://space.3dojmedia.com/escent-rayong2/plans/floors/15.png",
    floor: 1,
  },
  planType: "floor",
};

const useFloorStore = create<IFloorStore>((set, get) => ({
  ...initialState,
  setFloor: (floor) => {
    set({ floor: floor });
  },
  setPlanType: (pType: string) => {
    set({ planType: pType });
  },
}));

export { useFloorStore };
