import type { Note } from "@/types";

export const notes: Note[] = [
  { id: "n1", courseId: "comp301", title: "Chapter 4 — Design Patterns", type: "pdf", uploadedAt: "2026-07-18", favorite: true, bookmarked: true },
  { id: "n2", courseId: "comp301", title: "Sprint Planning Notes", type: "docx", uploadedAt: "2026-07-20", favorite: false, bookmarked: false },
  { id: "n3", courseId: "math214", title: "Eigenvalues & Eigenvectors", type: "pdf", uploadedAt: "2026-07-15", favorite: true, bookmarked: false },
  { id: "n4", courseId: "csc220", title: "Tree Traversal Slides", type: "ppt", uploadedAt: "2026-07-19", favorite: false, bookmarked: true },
  { id: "n5", courseId: "csc220", title: "Big-O Cheat Sheet", type: "pdf", uploadedAt: "2026-07-10", favorite: true, bookmarked: true },
  { id: "n6", courseId: "eng150", title: "Report Structure Guide", type: "docx", uploadedAt: "2026-07-12", favorite: false, bookmarked: false },
];