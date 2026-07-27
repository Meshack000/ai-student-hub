import type { Quiz } from "@/types";

export const quizzes: Quiz[] = [
  { id: "q1", courseId: "csc220", title: "Sorting Algorithms Quiz", type: "multiple-choice", questionCount: 10, lastScore: 80 },
  { id: "q2", courseId: "math214", title: "Eigenvalues Practice Quiz", type: "short-answer", questionCount: 8 },
  { id: "q3", courseId: "comp301", title: "Design Patterns True/False", type: "true-false", questionCount: 12, lastScore: 92 },
  { id: "q4", courseId: "phy201", title: "Kinematics Fill-in-the-Blank", type: "fill-blank", questionCount: 6, lastScore: 70 },
];