import Landon from "../components/Landon";
import Navbar from "../components/Navbar";
import { MenuProvider } from "../context/MenuContext";

export default function Home() {
  return (
    <div>
      <MenuProvider>
        <Navbar />
        <Landon />
      </MenuProvider>
    </div>
  );
}
