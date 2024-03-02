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

export function generateRandomLeaderboard(limit: number) {
  const data = Array.from({ length: limit }, () => ({
    username: faker.internet.displayName(),
    avatar: faker.image.avatar(),
    score: faker.number.int({ min: 500, max: 2000 }),
  }));

  // Sort the array based on the 'score' property in descending order
  const sortedData = [...data].sort((a, b) => b.score - a.score);

  return sortedData;
}
