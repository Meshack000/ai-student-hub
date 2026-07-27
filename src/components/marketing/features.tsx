"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  BookOpen,
  Layers,
  HelpCircle,
  ListChecks,
  CalendarDays,
  BarChart3,
  FileText,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "AI Tutor",
    description:
      "Ask questions, get concepts explained, and generate practice problems — with context from your own courses.",
  },
  {
    icon: BookOpen,
    title: "Courses",
    description:
      "Organize every course with notes, assignments, files, and announcements in one dedicated space.",
  },
  {
    icon: FileText,
    title: "Smart Notes",
    description:
      "Upload PDFs, DOCX, or slides. Bookmark, favorite, and search across everything you've saved.",
  },
  {
    icon: Layers,
    title: "Flashcards",
    description:
      "Auto-generate flashcard decks from your notes and study them with spaced-repetition-style tracking.",
  },
  {
    icon: HelpCircle,
    title: "Quiz Generator",
    description:
      "Turn any chapter into multiple choice, true/false, or short-answer quizzes to test yourself before exams.",
  },
  {
    icon: ListChecks,
    title: "Assignment Tracker",
    description:
      "Never miss a deadline. Track priority, progress, and status across every course in one list.",
  },
  {
    icon: CalendarDays,
    title: "Calendar",
    description:
      "See exams, due dates, and classes together — daily, weekly, or monthly.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Study hours, quiz performance, and streaks — a clear picture of how you're actually doing.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything academic, in one place
        </h2>
        <p className="mt-4 text-muted-foreground text-balance">
          The product is centered around your academic workflow — AI is one
          feature among many, not the whole product.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
          >
            <Card className="h-full transition-colors hover:border-primary/40">
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="size-5" />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}