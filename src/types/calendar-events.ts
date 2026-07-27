export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "class" | "assignment" | "exam";
  courseId: string;
}
