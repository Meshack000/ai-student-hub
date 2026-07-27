export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  type: "multiple-choice" | "short-answer" | "true-false" | "fill-blank";
  questionCount: number;
  lastScore?: number;
}
