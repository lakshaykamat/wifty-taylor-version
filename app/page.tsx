import { Button } from "@/components/ui/button";
import { fakerDE as faker } from "@faker-js/faker";
import Link from "next/link";
import React from "react";

type Props = {};

function HOme({ }: Props) {
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
const data = generateRandomLeadearBoard();
const HomePage = () => {
 

  // let numUsers;
  // if (window.innerWidth < 640) { // kam nhi kr raha window//ruk
  //   numUsers = 5;
  // } else if (window.innerWidth < 768) {
  //   numUsers = 10;
  // } else {
  //   numUsers = 15;
  // }


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
      <div className="mt-10 max-w-4xl mx-auto flex flex-col">
        <h1 className="text-3xl font-bold text-white text-start mb-3">Leadearboard</h1>
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <Leadearboard limit={12}/>
        </div>
        <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <Leadearboard limit={5}/>
        </div>
      </div>
    </div>
  );
};

// teen chahiye na 5, 10, 15... hmm wait maybe you can do it n ok ok smjhi ok  iski need hai
//haan  
//lekin ek min pheele tu bol phir mein bolta hu // ky BUT
//you got it na? smaj gayi na???hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// design pe do sabd khene chaunga ....bol
// bkear hain// i know tabhi dekh rahi thi design haa yrr pls

const Leadearboard = ({limit}:{limit:number})=>{
  return(
    data.slice(0, limit).map((item,index)  => (
      <div key={index} className={`flex gap-6 font-bold border-2 px-3 py-4 items-center justify-between bg-card text-card-foreground rounded-md`}>
        <div className="flex gap-2 items-center ">
          <span>{index+1}.</span>
          <img key={item.score} src={item.image} className="w-7 h-7 outline outline-1 rounded-full" />
          <h1 className="text-sm text-ellipsis overflow-hidden">{item.username}</h1>
        </div>
        <p className="text-xl">{item.score}</p>
      </div>
    ))
  )
}
export default HomePage;

function generateRandomLeadearBoard() {
  let data = [];
  for (let i = 0; i <= 14; i++) {
    let obj = {
      username: faker.internet.displayName(),
      image: faker.image.avatar(),
      score: faker.number.int({ min: 1000, max: 5000 }),
    };
    data[i] = obj;
  }
  const sortedData = [...data];

  // Sort the array based on the 'score' property
  sortedData.sort((a, b) => b.score - a.score);
  return sortedData;
}
