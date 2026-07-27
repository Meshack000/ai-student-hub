export * from "./courses";
export * from "./assignments";
export * from "./notes";
export * from "./flashcards";
export * from "./quizzes";
export * from "./calendar-events";

export interface Student {
  id: string;
  name: string;
  email: string;
  school: string;
  major: string;
  academicYear: string;
  studyStreak: number;
}

export interface NotificationItem {
  id: string;
  type: "assignment" | "exam" | "ai-suggestion" | "study";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface StudyStat {
  label: string;
  value: number;
  unit?: string;
}

export const currentStudent: Student = {
  id: "s1",
  name: "Meshack Oppong Mpiani",
  email: "meshack@aistudenthub.app",
  school: "University of Energy and Natural Resources",
  major: "Computer Engineering",
  academicYear: "Alumnus — Incoming Graduate Student",
  studyStreak: 12,
};

export const notifications: NotificationItem[] = [
  { id: "note1", type: "assignment", title: "Assignment due soon", message: "\"Design Document — Sprint 2\" is due in 2 days.", timestamp: "2026-07-26T08:00:00", read: false },
  { id: "note2", type: "exam", title: "Upcoming exam", message: "Linear Algebra Midterm scheduled for Aug 4.", timestamp: "2026-07-25T18:30:00", read: false },
  { id: "note3", type: "ai-suggestion", title: "AI suggestion", message: "You haven't reviewed \"Big-O Cheat Sheet\" in 6 days — want a quick refresher?", timestamp: "2026-07-25T09:00:00", read: true },
  { id: "note4", type: "study", title: "Study reminder", message: "Keep your 12-day streak alive — log a study session today.", timestamp: "2026-07-26T07:00:00", read: false },
];

export const chatHistory: ChatMessage[] = [
  { id: "c1", role: "user", content: "Can you explain recursion with a simple example?", timestamp: "2026-07-24T14:02:00" },
  { id: "c2", role: "assistant", content: "Recursion is when a function calls itself to solve smaller instances of the same problem, until it reaches a base case. A classic example is calculating factorial: factorial(n) = n × factorial(n-1), stopping at factorial(0) = 1.", timestamp: "2026-07-24T14:02:05" },
];

export const studyStats: StudyStat[] = [
  { label: "Study Hours", value: 24, unit: "hrs" },
  { label: "Assignments Completed", value: 18 },
  { label: "Quiz Avg. Score", value: 84, unit: "%" },
  { label: "Study Streak", value: 12, unit: "days" },
];

export const suggestedPrompts: string[] = [
  "Explain recursion.",
  "Summarize chapter 4.",
  "Generate exam questions.",
  "Teach me Binary Trees.",
];
