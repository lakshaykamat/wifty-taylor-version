import { Button } from "@/components/ui/button";
import { fakerDE as faker } from "@faker-js/faker";
import Link from "next/link";
import React from "react";

type Props = {};

function HOme({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <h1 className="text-4xl font-extrabold tracking-wider text-center uppercase scroll-m-20 my-7 lg:text-6xl">
        Welcome to <span className="text-primary">Quizzy</span>
      </h1>
      <span className="font-semibold text-gray-600">Simple Clean Best</span>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
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
  const data = generateRandomLeadearBoard();
  return (
    <div className="relative mx-auto my-10">
      <picture className="w-full outline">
        <source
          srcSet="/image/taylor.png"
          className="w-full h-[680px] drop-shadow-xl object-cover rounded-xl"
          media="(min-width: 640px)"
        />
        <img
          src="/image/mobileView.jpeg"
          className="w-full h-[580px] drop-shadow-xl object-cover rounded-xl"
          alt="Taylor Swift is singing"
        />
      </picture>
      <div className="sm:px-10 px-5 py-5 mx-5 sm:mx-10 bg-blend-saturation backdrop-blur-md flex flex-col sm:outline outline-1 outline-gray-800 gap-3 text-white absolute top-[5%] sm:top-[10%] rounded-lg">
        <h1 className="text-4xl font-bold uppercase sm:text-5xl md:text-6xl">
          Super Swifty
        </h1>
        <p className="text-base sm:font-semibold sm:text-2xl">
          Let's see how much do you know taylor swift?
        </p>
      </div>
      {data.map((item) => (
        <>
          <h1>{item.username}</h1>
          <img key={item.score} src={item.image} className="w-10 h-10" />
        </>
      ))}
    </div>
  );
};

export default HomePage;

function generateRandomLeadearBoard() {
  let data = [];
  for (let i = 0; i <= 10; i++) {
    let obj = {
      username: faker.internet.displayName(),
      image: faker.image.avatar(),
      score: faker.number.int({ min: 1000 }),
    };
    data[i] = obj;
  }
  return data;
}
