import type { CalendarEvent } from "@/types";

export const calendarEvents: CalendarEvent[] = [
  { id: "e1", title: "COMP301 Lecture", date: "2026-07-27", time: "09:00", type: "class", courseId: "comp301" },
  { id: "e2", title: "Physics Lab Report Due", date: "2026-07-25", time: "23:59", type: "assignment", courseId: "phy201" },
  { id: "e3", title: "DSA Lab 4 Due", date: "2026-07-28", time: "23:59", type: "assignment", courseId: "csc220" },
  { id: "e4", title: "Linear Algebra Midterm", date: "2026-08-04", time: "10:00", type: "exam", courseId: "math214" },
  { id: "e5", title: "MATH214 Lecture", date: "2026-07-29", time: "11:00", type: "class", courseId: "math214" },
  { id: "e6", title: "Design Document Due", date: "2026-08-02", time: "23:59", type: "assignment", courseId: "comp301" },
];