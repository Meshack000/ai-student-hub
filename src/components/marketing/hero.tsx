"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ConvergenceVisual } from "@/components/marketing/convergence-visual";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-20 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Badge variant="secondary" className="mb-4 sm:mb-6">
                Your academic operating system
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              Six apps.
              <br />
              <span className="text-primary">One hub.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-lg text-balance text-base text-muted-foreground sm:mt-6 sm:text-lg"
            >
              Stop bouncing between ChatGPT, Notion, Drive, and your calendar.
              AI Student Hub brings your courses, notes, assignments, and an AI tutor into one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row lg:justify-start"
            >
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/register">
                  Get started free
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/dashboard">See the dashboard</Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-3 text-xs text-muted-foreground sm:mt-4"
            >
              No credit card required — Phase 1 is a fully interactive preview.
            </motion.p>
          </div>

          <div className="mt-4 flex w-full justify-center overflow-hidden lg:mt-0 lg:justify-end">
            <div className="w-full max-w-md lg:max-w-none">
              <ConvergenceVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}