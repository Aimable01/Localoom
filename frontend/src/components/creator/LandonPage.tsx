import Image from "next/image";
import image1 from "../../assets/image2.png";
import Link from "next/link";
import { RefreshCcwDot, Settings, Tag } from "lucide-react";

export default function LandonPage() {
  return (
    <div className="mx-10 md:mx-20">
      {/* the first section */}
      <div className="my-4 md:flex gap-5 items-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-semibold text-gray-800">
            Stand out in your community with a free <br />{" "}
            <span className="text-cyan-500">Business Profile</span>
          </h1>
          <p className="py-3 text-gray-700 mb-8">
            Turn people who find you on our platform into new customers with a
            free Business Profile for your storefront or service area.
            Personalize your profile with photos, offers, posts, and more.
          </p>

          <Link
            className="bg-cyan-500 hover:bg-cyan-700  duration-500 text-[15px] text-gray-100 px-5 py-3 rounded-lg font-semibold"
            href={"/signup"}
          >
            Create profile
          </Link>
        </div>

        <div>
          <Image
            src={image1}
            alt="An svg illustration of explore business"
            className="h-[500px] w-[900px]"
          />
        </div>
      </div>

      {/* the second section */}
      <div>
        <div>
          <Tag className="fill-cyan-500 text-white" />
        </div>
        <div>
          <RefreshCcwDot className="text-cyan-500" />
        </div>
        <div>
          <Settings className="text-cyan-500" />
        </div>
      </div>
    </div>
  );
}
