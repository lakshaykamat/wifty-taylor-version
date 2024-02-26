import Game from "@/app/models/Game";
import { connectMongodb } from "@/lib/mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  try {
    await connectMongodb();
    // console.log(req.url);
    // const { id } = extractQueryFromRequest(req);
    const url = new URL(req.url);
    const params = new URLSearchParams(url.search);
    // console.log(id);
    // if (!id)
    //   return NextResponse.json({
    //     isError: true,
    //     message: "Specify game id in query",
    //   });
    // const game = await Game.findById(id);
    return NextResponse.json({ id: params.get("id"), url, params });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      isError: true,
      message: "Something went wrong!",
      err,
    });
  }
}
function extractQueryFromRequest(req: Request) {
  console.log(req.url);
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  return {
    id: params.get("id"),
  };
}
