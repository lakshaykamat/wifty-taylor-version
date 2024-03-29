"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const Header = () => {
  const isUserLogin = false;

  return (
    <header>
      <nav className="items-center py-3 flex justify-around">
        <h1 className="text-2xl font-[Pacifico]">{"Wifty Taylor version"}</h1>
        <div className="gap-6 hidden sm:flex">
          <span className="text-sm hover:underline cursor-pointer">Home</span>
          <Link
            href={`/explore`}
            className="text-sm hover:underline cursor-pointer"
          >
            Explore
          </Link>
          <span className="text-sm hover:underline cursor-pointer">
            Friends
          </span>
        </div>

        <div className="flex sm:hidden">
          <SideBar />
        </div>
        <div className="hidden sm:flex gap-4 items-center">
          {/* <ThemeToggle /> */}
          {isUserLogin ? (
            <>
              <Avatar>
                <AvatarImage
                  className="w-10 rounded-full h-10"
                  src={"https://github.com/lakshaykamat.png"}
                />
                <AvatarFallback>LK</AvatarFallback>
              </Avatar>
              <h1 className="text-sm">Lakshay Kamat</h1>
            </>
          ) : (
            <>
              <Link href={`/login`}>
                <Button size={"sm"}>Login</Button>
              </Link>
              <Link href={`/register`}>
                <Button size={"sm"} variant={"secondary"}>
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

const SideBar = () => {
  const theme = useTheme();
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <div className="flex mb-6 mt-3 flex-wrap gap-4 items-center">
          <Avatar>
            <AvatarImage
              className="w-10 rounded-full h-10"
              src={"https://github.com/lakshaykamat.png"}
            />
            <AvatarFallback>LK</AvatarFallback>
          </Avatar>
          <h3>Lakshay Kamat</h3>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {theme.theme == "light" ? "Light Mode" : "Dark Mode"}
        </div>
        <div className="mt-3 flex flex-col">
          <div className="p-3 flex rounded hover:bg-secondary">
            <Link href={`/`} className="text-sm cursor-pointer">
              Home
            </Link>
          </div>
          <div className="p-3 flex rounded hover:bg-secondary">
            <Link href={`/explore`} className="text-sm cursor-pointer">
              Explore
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-menu"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};
export default Header;
