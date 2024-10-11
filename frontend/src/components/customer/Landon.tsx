"use client";
import Image from "next/image";
import image1 from "../../assets/image1.jpeg";
import { useMenuStore } from "@/stores/menuStore";

export default function Landon() {
  const { menuOpen } = useMenuStore();

  return (
    <div className="my-2 md:mx-10 relative">
      <div className="relative h-[450px] w-[100%]">
        <Image
          src={image1}
          alt="Splash picture of a local market place"
          className="h-[450px] w-full object-cover absolute -z-10 md:rounded-lg"
        />

        {/* the welcome banner */}
        <div>
          {/* the message */}
          <div className="text-white p-5">
            <h1 className="font-bold text-center text-xl md:text-3xl">
              Promote, discover, or connect with local industries <br /> easily
              in your area.
            </h1>
            <p className="text-center my-3 md:text-lg">
              A great platform to showcase, find, or access industries without
              any intermediary fees.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${
          menuOpen ? "absolute" : "hidden"
        } h-[520px] w-full opacity-75 bg-black top-0 left-0`}
      ></div>
    </div>
  );
}
