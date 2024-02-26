"use client";
import useSWR from "swr";
import QuestionPage from "./QuestionPage";
import AXIOS from "@/lib/axiosHelper";
import { Skeleton } from "@/components/ui/skeleton";

const Page = ({ params }: { params: { quizId: string } }) => {
  const { quizId } = params;

  const LENGTH_OF_QUESTION = 7;
  const {
    data: quizData,
    error,
    isLoading,
  } = useSWR(
    () =>
      `${process.env.NEXT_PUBLIC_WEB_URL}/questions?id=${quizId}&limit=${LENGTH_OF_QUESTION}`,
    AXIOS.fetchQuestionsList,
    {
      revalidateOnFocus: false, // Disable refetching on focus
      revalidateOnReconnect: false, // Disable refetching on reconnect
    }
  );

  if (error) return <h1>Error loading data</h1>;
  if (isLoading)
    return <QuestionSkeleton questionLength={LENGTH_OF_QUESTION} />;

  if (quizData) {
    const { questionsList, name } = quizData;
    return (
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-7 mb-7">
          {name}
        </h2>
        <QuestionPage quizId={quizData.quizId} questionList={questionsList} />
      </div>
    );
  }
};

type QuestionSkeletonProps = {
  questionLength: number;
};

const QuestionSkeleton = (props: QuestionSkeletonProps) => {
  return (
    <div className="my-12">
      <Skeleton className="h-16 w-full" />
      {Array(props.questionLength)
        .fill(undefined)
        .map((item, i) => (
          <>
            <div key={i} className="my-8">
              <Skeleton className="h-8 w-[80%] mb-3" />
              <div className="flex flex-col gap-3">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default Page;
