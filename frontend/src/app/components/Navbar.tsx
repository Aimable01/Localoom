"use client";
import { LocateFixed, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { links } from "../lib/links";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

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
  }, []);

  return (
    <div>
      <div className="m-3 flex justify-between">
        {/* logo */}
        <Link href={"/"} className="flex items-center gap-1">
          <LocateFixed className="text-sky-500" height={34} width={34} />
          <h1 className="font-bold text-gray-700 text-xl rounded-sm">
            LocaLoom
          </h1>
        </Link>

        {/* menu icon */}
        <div
          ref={iconRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer"
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
          menuOpen ? "top-16" : "-top-full"
        } m-2 flex flex-col gap-2 font-semibold text-gray-600 absolute w-[97%] transition-all duration-700 bg-white`}
      >
        {links.map((li) => (
          <Link
            key={li.name}
            href={li.path}
            className="hover:text-sky-500 duration-500"
          >
            {li.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
