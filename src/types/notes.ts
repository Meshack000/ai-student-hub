export interface Note {
  id: string;
  courseId: string;
  title: string;
  type: "pdf" | "docx" | "ppt" | "other";
  uploadedAt: string;
  favorite: boolean;
  bookmarked: boolean;
}
