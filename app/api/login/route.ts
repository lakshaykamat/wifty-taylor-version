import { connectMongodb } from "@/lib/mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectMongodb();
    const { username, password } = await req.json();
    return NextResponse.json(
      { username, password },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      isError: true,
      message: "Something went wrong!",
    });
  }
}
