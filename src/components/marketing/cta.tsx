"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-border bg-primary px-8 py-16 text-center sm:px-16"
      >
        <div
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_45%)]"
          aria-hidden="true"
        />
        <h2 className="relative text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
          Bring your academic life into one place
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80 text-balance">
          Set up your first course in under two minutes. No credit card,
          no backend to wait on — Phase 1 is ready to try today.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/register">
              Get started free
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}