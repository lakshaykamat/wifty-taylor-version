"use client";
import { generateRandomLeadearBoard } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const Leadearboard = ({ limit }: { limit: number }) => {
  return generateRandomLeadearBoard()
    .slice(0, limit)
    .map((item, index) => (
      <div
        key={index}
        className={`flex gap-6 px-5 py-4 items-center justify-between bg-secondary text-secondary-foreground outline dark:outline-gray-700 outline-gray-200 outline-2 rounded-md`}
      >
        <div className="flex gap-4 items-center overflow-hidden">
          <span className="text-lg w-[1.2rem]">{index + 1}.</span>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                className="w-7 h-7 outline outline-1 rounded-full"
                src={item.image}
              />
              <AvatarFallback>
                <UserIcon />
              </AvatarFallback>
            </Avatar>
            <h1 className="text-base text-ellipsis overflow-hidden">
              {item.username}
            </h1>
          </div>
        </div>
        <p className="text-xl">{item.score}</p>
      </div>
    ));
};

const UserIcon = () => {
  return (
    <div className="outline outline-1 rounded-full flex items-center justify-center p-1 bg-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user-round"
      >
        <circle cx={12} cy={8} r={5} />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    </div>
  );
};
export default Leadearboard;
