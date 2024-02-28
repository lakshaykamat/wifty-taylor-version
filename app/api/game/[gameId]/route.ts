import Game from "@/app/models/Game";
import { connectMongodb } from "@/lib/mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

type Props = {
  params: {
    gameId: string;
  };
};
export async function GET(req: Request, { params: { gameId } }: Props) {
  try {
    await connectMongodb();

    if (!gameId)
      return NextResponse.json({
        isError: true,
        message: "Specify game id in query",
      });
    const game = await Game.findById(gameId);
    if (!game) {
      return NextResponse.json({
        isError: true,
        message: "Game id is invalid!",
      });
    }
    return NextResponse.json({ game });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      isError: true,
      message: "Something went wrong!",
      err,
    });
  }
}
