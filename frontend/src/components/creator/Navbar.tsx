import { LocateFixed } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mx-3 md:mx-20 p-3">
      <div>
        {/* logo */}
        <Link href={"/"} className="flex items-center gap-1">
          <LocateFixed className="text-cyan-500" height={34} width={34} />
          <h1 className="font-bold text-gray-700 text-xl rounded-sm">
            LocaLoom
          </h1>
        </Link>
      </div>

      <div className="font-semibold flex gap-3">
        <Link
          className="bg-cyan-100 hover:bg-cyan-100 duration-500 hover:text-gray-500 text-cyan-500 text-[15px] px-3 py-2 rounded-md"
          href={"/signin"}
        >
          Sign in
        </Link>
        <Link
          className="bg-cyan-500 hover:bg-cyan-700  duration-500 text-[15px] text-white px-3 py-2 rounded-md"
          href={"/signup"}
        >
          Create profile
        </Link>
      </div>
    </div>
  );
}
