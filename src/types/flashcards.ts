export interface Flashcard {
  id: string;
  courseId: string;
  front: string;
  back: string;
  difficulty: "easy" | "medium" | "hard";
  progress: number;
  favorite: boolean;
}
