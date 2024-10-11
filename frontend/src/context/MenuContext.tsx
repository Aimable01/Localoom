"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type MenuContextType = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error(
      "useMenu Context must be used within a context MenuProvider"
    );
  }

  return context;
};
