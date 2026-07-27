"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get organized.",
    features: [
      "Unlimited courses",
      "Notes, assignments & calendar",
      "Basic flashcards & quizzes",
      "5 AI tutor messages / day",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "—",
    period: "coming soon",
    description: "Unlimited AI tutoring and study analytics.",
    features: [
      "Everything in Free",
      "Unlimited AI tutor messages",
      "AI-generated flashcards & quizzes",
      "Full study analytics",
    ],
    cta: "Join the waitlist",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-y border-border bg-surface-muted/50"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple pricing
          </h2>
          <p className="mt-4 text-muted-foreground text-balance">
            Pro pricing is still being finalized — Phase 1 is free to try in
            full.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card
                className={
                  tier.highlighted
                    ? "h-full border-primary shadow-md shadow-primary/10"
                    : "h-full"
                }
              >
                <CardHeader>
                  {tier.highlighted && (
                    <Badge className="mb-2 w-fit">Most anticipated</Badge>
                  )}
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="flex items-baseline gap-1.5 pt-2">
                    <span className="text-3xl font-semibold">
                      {tier.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {tier.period}
                    </span>
                  </div>
                  <p className="pt-1 text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/register">{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}