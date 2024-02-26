import axios from "axios";
import { GameData } from "./fetchGameData";

export interface UserResponseData {
  quizId: string;
  userResponse: UserResponse[];
}

export interface UserResponse {
  userChoice: string;
  question: Question;
}

export interface Question {
  id: string;
  question: string;
  explanation: string;
  options: Option[];
  category: string;
}

export interface Option {
  text: string;
  isRight: boolean;
}

async function postUserResponseOfQuestions(
  url: string,
  data: UserResponseData
): Promise<GameData> {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_WEB_URL + "/questions",
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
}

export default postUserResponseOfQuestions;
