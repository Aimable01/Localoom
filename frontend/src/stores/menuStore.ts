import { create } from "zustand";

type Menustate = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export const useMenuStore = create<Menustate>((set) => ({
  menuOpen: false,
  setMenuOpen: (open: boolean) => set({ menuOpen: open }),
}));
