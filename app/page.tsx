import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from 'react';

type Props = {};

function HOme({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <h1 className="scroll-m-20 my-7 text-center uppercase text-4xl tracking-wider font-extrabold lg:text-6xl">
        Welcome to <span className="text-primary">Quizzy</span>
      </h1>
      <span className="text-gray-600 font-semibold">Simple Clean Best</span>
      <div className="mt-8 flex gap-6 flex-wrap items-center justify-center">
        <Link href={`/explore`}>
          <Button className="rounded-full min-w-28" size={"lg"}>
            Explore
          </Button>
        </Link>
        <Link href={`/login`}>
          <Button
            size={"lg"}
            className="rounded-full min-w-28"
            variant={"secondary"}
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}

const HomePage = () => {
  const data = [
    {
      username:"Shikha Singh",
      image:"https://i.pinimg.com/564x/52/65/c6/5265c6def69f0b41b51cff17df2c3a1f.jpg",
      score:900
    },
    {
      username:"Shikha Singh",
      image:"https://i.pinimg.com/564x/52/65/c6/5265c6def69f0b41b51cff17df2c3a1f.jpg",
      score:900
    },    {
      username:"Shikha Singh",
      image:"https://i.pinimg.com/564x/52/65/c6/5265c6def69f0b41b51cff17df2c3a1f.jpg",
      score:900
    },    {
      username:"Shikha Singh",
      image:"https://i.pinimg.com/564x/52/65/c6/5265c6def69f0b41b51cff17df2c3a1f.jpg",
      score:900
    },    {
      username:"Shikha Singh",
      image:"https://i.pinimg.com/564x/52/65/c6/5265c6def69f0b41b51cff17df2c3a1f.jpg",
      score:900
    },    {
      username:"Shikha Singh",
      image:"https://i.pinimg.com/564x/52/65/c6/5265c6def69f0b41b51cff17df2c3a1f.jpg",
      score:900
    },    {
      username:"Shikha Singh",
      image:"https://i.pinimg.com/564x/52/65/c6/5265c6def69f0b41b51cff17df2c3a1f.jpg",
      score:900
    },
    {
      username:"Shikha Singh",
      image:"https://i.pinimg.com/564x/52/65/c6/5265c6def69f0b41b51cff17df2c3a1f.jpg",
      score:900
    },    {
      username:"Shikha Singh",
      image:"https://i.pinimg.com/564x/52/65/c6/5265c6def69f0b41b51cff17df2c3a1f.jpg",
      score:900
    },
  ]
  return (
    <div className="my-10 relative sm:max-w-7xl mx-auto">
      <img
        src="/image/mobileView.jpeg"
        className="w-full h-[550px] drop-shadow-xl object-cover rounded-xl filter "
      />
      <div className="sm:px-10 px-3 py-5 rounded-lg sm:mx-10 sm:bg-blend-saturation sm:backdrop-blur-lg flex flex-col sm:outline outline-gray-700 outline-1 gap-3 text-white absolute top-[5%]">
        <h1 className="uppercase text-3xl sm:text-6xl font-extrabold">Super Swifty</h1>
        <p className="sm:text-2xl font-semibold">
          Let's see how much do you know taylor swift?
        </p>
      </div>
    </div>
  );
};

export default HomePage;
