import Image from "next/image";
import Link from "next/link";
import { RefreshCcwDot, Settings, Tag } from "lucide-react";

import image1 from "../../assets/image2.png";
import image2 from "../../assets/image3.png";
import { Accordion } from "@radix-ui/react-accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function LandonPage() {
  return (
    <div className="px-10 md:px-20">
      {/* the first section */}
      <div className="my-10 md:flex gap-5 items-center">
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
      <div className="my-24 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-cyan-100 rounded-full w-[100px] h-[100px] p-7">
            <Tag className="fill-cyan-500 text-white" width={50} height={50} />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-lg m-2">Free</h1>
            <p className="text-gray-800">
              Create a business profile at no cost
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-orange-100 rounded-full w-[100px] h-[100px] p-7">
            <RefreshCcwDot className="text-orange-500" width={50} height={50} />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-lg m-2">Easy</h1>
            <p className="text-gray-800">
              Manage your profile from Search and Maps
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-green-100 rounded-full w-[100px] h-[100px] p-7">
            <Settings className="text-green-500" width={50} height={50} />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-lg m-2">Personalized</h1>
            <p className="text-gray-800">Add hours, photos, posts and more</p>
          </div>
        </div>
      </div>

      {/* the third section */}
      <div className="my-24 md:flex gap-5 items-center">
        <div>
          <Image
            src={image2}
            alt="A customer support svg"
            className="h-[500px] w-[900px]"
          />
        </div>

        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
            Take charge of your first impression
          </h1>
          <p className="py-3 text-gray-700 mb-8">
            Highlight essential info and what makes your business unique, right
            on your Business profile.
          </p>
          <Link
            className="bg-cyan-500 hover:bg-cyan-700  duration-500 text-[15px] text-gray-100 px-5 py-3 rounded-lg font-semibold"
            href={"/signup"}
          >
            Create profile
          </Link>
        </div>
      </div>

      {/* the fourth section */}
      <div className="bg-cyan-50  my-28 p-6 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center bg-white rounded-full w-[100px] h-[100px] p-7">
            <p className="font-bold text-3xl text-cyan-500">1</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-lg m-2">Claim</h1>
            <p className="text-gray-800">
              Create a Business Profile, or manage an existing profile on Search
              and Maps
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="text-center bg-white rounded-full w-[100px] h-[100px] p-7">
            <p className="font-bold text-3xl text-cyan-500">2</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-lg m-2">Personalize</h1>
            <p className="text-gray-800">
              Add hours, photos, and other details and get discovered by
              customers near you
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="text-center bg-white rounded-full w-[100px] h-[100px] p-7">
            <p className="font-bold text-3xl text-cyan-500">3</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-lg m-2">Manage</h1>
            <p className="text-gray-800">
              Share updates, respond to reviews, and connect with customers on
              Google
            </p>
          </div>
        </div>
      </div>

      {/* the FAQ section */}
      <div className="my-28">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-bold">
            Your questions answered
          </h1>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Is creating a business profile free?
            </AccordionTrigger>
            <AccordionContent>
              Yes, creating a Business Profile and listing your business is
              free. Create your profile at no cost, and you can manage your
              business from Google Search and Maps to start reaching more
              customers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
