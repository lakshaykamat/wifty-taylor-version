import Quiz from "@/app/models/Quiz";
import { connectMongodb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

type Props = {
  params: {
    id: string;
  };
};
export async function GET(req: Request, { params: { id } }: Props) {
  try {
    await connectMongodb();

    if (!id)
      return NextResponse.json({
        isError: true,
        message: "Specify quiz id in query",
      });
    const quiz = await Quiz.findById(id);
    if (!quiz) {
      console.log(quiz);
      return NextResponse.json({
        isError: true,
        message: "Quiz id is invalid!",
      });
    }
    return NextResponse.json({ quiz });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      isError: true,
      message: "Something went wrong!",
      err,
    });
  }
}
