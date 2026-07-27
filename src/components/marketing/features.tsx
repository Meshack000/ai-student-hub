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

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
      "Auto-generate flashcard decks from your notes and study them with simple progress tracking.",
  },
  {
    icon: HelpCircle,
    title: "Quiz Generator",
    description:
      "Turn any chapter into multiple choice, true/false, or short-answer quizzes to test yourself.",
  },
  {
    icon: ListChecks,
    title: "Assignment Tracker",
    description:
      "Track priority, progress, and status across every course in one list.",
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
      "Study hours, quiz performance, and streaks — a clear picture of your progress.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          Everything academic, in one place
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base text-balance">
          AI is one feature among many — the product is built around your full academic workflow.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
          >
            <Card className="h-full border-border/70 transition-colors hover:border-primary/40">
              <CardHeader className="p-4 sm:p-5">
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="size-5" />
                </div>
                <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}