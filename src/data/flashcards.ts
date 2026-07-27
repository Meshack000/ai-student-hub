import type { Flashcard } from "@/types";

export const flashcards: Flashcard[] = [
  { id: "f1", courseId: "csc220", front: "What is the time complexity of binary search?", back: "O(log n)", difficulty: "easy", progress: 90, favorite: true },
  { id: "f2", courseId: "csc220", front: "Define a balanced binary search tree.", back: "A BST where the height difference between left and right subtrees of any node is at most 1.", difficulty: "medium", progress: 60, favorite: false },
  { id: "f3", courseId: "math214", front: "What is an eigenvector?", back: "A non-zero vector that only changes by a scalar factor when a linear transformation is applied.", difficulty: "hard", progress: 35, favorite: true },
  { id: "f4", courseId: "comp301", front: "What is the Single Responsibility Principle?", back: "A class should have only one reason to change.", difficulty: "easy", progress: 80, favorite: false },
  { id: "f5", courseId: "phy201", front: "State Newton's Second Law.", back: "Force equals mass times acceleration (F = ma).", difficulty: "easy", progress: 95, favorite: false },
];