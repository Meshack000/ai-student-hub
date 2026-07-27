"use client";

import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ama K.",
    role: "Computer Engineering, Year 3",
    quote:
      "I used to lose notes across four different apps. Now everything for a course lives in one tab, including the AI tutor.",
    initials: "AK",
  },
  {
    name: "Daniel O.",
    role: "Software Engineering, MSc applicant",
    quote:
      "The assignment tracker alone fixed my deadline problem. The flashcards are what I open the night before an exam.",
    initials: "DO",
  },
  {
    name: "Priya N.",
    role: "Applied Physics, Year 2",
    quote:
      "It doesn't feel like another dashboard I have to maintain. It feels like the one that replaced the other five.",
    initials: "PN",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Built around how students actually study
        </h2>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}