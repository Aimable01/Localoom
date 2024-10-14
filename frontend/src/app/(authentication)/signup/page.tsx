import { LocateFixed } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Sign up",
};

export default function Signup() {
  return (
    <div>
      <div>
        {/* logo */}
        <Link href={"/"} className="flex items-center gap-1">
          <LocateFixed className="text-cyan-500" height={34} width={34} />
          <h1 className="font-bold text-gray-700 text-xl rounded-sm">
            LocaLoom
          </h1>
        </Link>
      </div>
    </div>
  );
}
