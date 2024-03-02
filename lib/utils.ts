import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Question, QuizType } from "@/types";
import { fakerDE as faker } from "@faker-js/faker";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function generateRandomLeadearBoard() {
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
