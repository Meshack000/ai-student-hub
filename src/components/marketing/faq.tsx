"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this actually connected to a real AI right now?",
    answer:
      "Phase 1 is a fully designed frontend preview using realistic mock data, including the AI Tutor's example conversations. Real OpenAI-powered responses are the very next phase.",
  },
  {
    question: "Do I need to create an account to try it?",
    answer:
      "Not yet — authentication is UI-only in this phase. You can explore the dashboard and every page without signing up.",
  },
  {
    question: "Will my notes and courses be saved?",
    answer:
      "Not in Phase 1. Persistence arrives once the database layer (Supabase + PostgreSQL) is connected in a later phase.",
  },
  {
    question: "What file types can I upload for notes?",
    answer:
      "The Notes page supports PDF, DOCX, and PPT uploads. In this phase the upload flow is UI-only; file parsing arrives with the backend.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Not yet. The web app is fully responsive down to mobile, and a native app is on the longer-term roadmap.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="mt-12">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}