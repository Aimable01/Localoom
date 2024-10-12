"use client";
import { LocateFixed, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { links } from "../../lib/links";
import { usePathname } from "next/navigation";
import { useMenuStore } from "@/stores/menuStore";

export default function Navbar() {
  const { menuOpen, setMenuOpen } = useMenuStore();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  // check for active link
  const pathName = usePathname();

  // handle click outside to close the menu
  const handleClickOutside = (e: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      iconRef.current &&
      !iconRef.current.contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="flex justify-between sticky top-0 z-50 px-3 py-4 md:px-20 w-full backdrop-blur-3xl bg-white/5 shadow-md">
        {/* logo */}
        <Link href={"/"} className="flex items-center gap-1">
          <LocateFixed className="text-cyan-500" height={34} width={34} />
          <h1 className="font-bold text-gray-700 text-xl rounded-sm">
            LocaLoom
          </h1>
        </Link>

        {/* the links on deskop */}

        <div className="hidden md:flex font-semibold text-gray-600 gap-5">
          {links.map((li) => (
            <Link
              key={li.name}
              href={li.path}
              className={`hover:text-cyan-500 duration-500 ${
                pathName === li.path ? "text-cyan-500" : ""
              }`}
            >
              {li.name}
            </Link>
          ))}

          {/* the call to action button */}
          <div className="ml-10">
            <Link
              href={"/create"}
              className="bg-cyan-500 hover:bg-cyan-700 duration-500 text-white px-3 py-2 rounded-md"
            >
              Create
            </Link>
          </div>
        </div>

        {/* menu icon */}
        <div
          ref={iconRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer md:hidden"
        >
          {menuOpen ? (
            <X className="text-gray-700" height={25} width={25} />
          ) : (
            <Menu className="text-gray-700" height={25} width={25} />
          )}
        </div>
      </div>

      <hr />

      {/* the links on mobile */}
      <div
        ref={menuRef}
        className={`${
          menuOpen ? "top-20" : "-top-full"
        } p-5 m-2 flex flex-col gap-2 font-semibold text-gray-600 absolute w-[97%] transition-all duration-700 bg-white z-20
         `}
      >
        {links.map((li) => (
          <Link
            key={li.name}
            href={li.path}
            className={`hover:text-cyan-500 duration-500 ${
              pathName === li.path ? "text-cyan-500" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {li.name}
          </Link>
        ))}

        {/* the call to action button */}
        <div className="mt-3">
          <Link
            href={"/create"}
            className="bg-cyan-500 hover:bg-cyan-700 duration-500 text-white px-3 py-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Create
          </Link>
        </div>
      </div>
    </div>
  );
}
