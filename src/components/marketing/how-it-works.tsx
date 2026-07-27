"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Add your courses",
    description:
      "Set up each course once — code, instructor, term — and everything else organizes around it.",
  },
  {
    number: "02",
    title: "Upload your notes",
    description:
      "Drop in PDFs, slides, or docs. They're searchable, bookmarkable, and ready for the AI tutor to reference.",
  },
  {
    number: "03",
    title: "Ask the AI tutor",
    description:
      "Get concepts explained, chapters summarized, or exam questions generated — grounded in your material.",
  },
  {
    number: "04",
    title: "Track your progress",
    description:
      "Assignments, quiz scores, and study streaks stay visible so you always know where you stand.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-border bg-surface-muted/50"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-muted-foreground text-balance">
            A real sequence — this is the order the product is designed to be
            used in.
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute top-6 left-0 right-0 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 mb-4 flex size-12 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-primary">
                {step.number}
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}