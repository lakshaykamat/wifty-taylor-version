"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

interface LoginState {
  email: string;
  password: string;
  isLoading: boolean;
  error: {
    isError: boolean;
    message: string | null;
  };
}

const LoginPage = () => {
  const setLoginStateWithUpdate = (update: Partial<LoginState>) => {
    setLoginState((prevState) => ({
      ...prevState,
      ...update,
    }));
  };
  const [loginState, setLoginState] = useState<LoginState>({
    email: "",
    password: "",
    isLoading: false,
    error: {
      isError: false,
      message: null,
    },
  });

  const handleSumbit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Reset error and message
    setLoginStateWithUpdate({
      error: {
        isError: false,
        message: null,
      },
    });

    if (!loginState.email || !loginState.password) {
      setLoginStateWithUpdate({
        error: {
          isError: true,
          message: "Email and Password are required!",
        },
      });
      return;
    }

    // Perform login logic here
    console.log(loginState);
  };

  // Handle changes in the email input
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginStateWithUpdate({
      email: e.target.value,
    });
  };

  // Handle changes in the password input
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginStateWithUpdate({
      password: e.target.value,
    });
  };

  return (
    <Card className="max-w-sm mx-auto my-32 px-3 py-7">
      <CardHeader>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Login
        </h3>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSumbit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              name="email"
              onChange={handleEmailChange}
              value={loginState.email}
              className="bg-gray-200 dark:bg-gray-600 outline-none focus:ring-2 ring-offset-1 px-3 py-1 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="passowrd">Password</label>
            <input
              type="password"
              name="password"
              value={loginState.password}
              onChange={handlePasswordChange}
              className="bg-gray-200 dark:bg-gray-600 outline-none focus:ring-2 ring-offset-1 px-3 py-1 rounded-md"
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
        <p className="text-sm mt-3 text-right">
          Create an account?{" "}
          <Link href={`/register`} className="font-semibold underline">
            Register
          </Link>
        </p>
      </CardContent>
      {loginState.error.isError && (
        <CardFooter>
          <p className="text-sm rounded  w-full px-3 py-1 bg-destructive text-destructive-foreground">
            {loginState.error.message}
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default LoginPage;
