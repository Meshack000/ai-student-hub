export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
  status: "not-started" | "in-progress" | "completed" | "overdue";
  progress: number;
}
