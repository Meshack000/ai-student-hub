"use client";

import { motion } from "framer-motion";
import {
  Sparkle,
  MessageSquare,
  Calendar,
  FileText,
  Layers,
  BookOpen,
  Cloud,
} from "lucide-react";

const orbitIcons = [
  { Icon: MessageSquare, label: "AI chat", angle: -90 },
  { Icon: FileText, label: "Notes", angle: -30 },
  { Icon: Calendar, label: "Calendar", angle: 30 },
  { Icon: Layers, label: "Flashcards", angle: 90 },
  { Icon: BookOpen, label: "Courses", angle: 150 },
  { Icon: Cloud, label: "Storage", angle: 210 },
];

const RADIUS = 148;

function polarToCartesian(angleDeg: number, radius: number) {
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: radius * Math.cos(angleRad),
    y: radius * Math.sin(angleRad),
  };
}

export function ConvergenceVisual() {
  return (
    <div
      className="relative mx-auto h-[340px] w-[340px] sm:h-[380px] sm:w-[380px]"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="-190 -190 380 380"
      >
        {orbitIcons.map(({ angle }, i) => {
          const { x, y } = polarToCartesian(angle, RADIUS);
          return (
            <motion.line
              key={i}
              x1={0}
              y1={0}
              x2={x}
              y2={y}
              stroke="var(--color-border)"
              strokeWidth={1.5}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.06 }}
            />
          );
        })}
      </svg>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {orbitIcons.map(({ Icon, label, angle }, i) => {
          const { x, y } = polarToCartesian(angle, RADIUS);
          return (
            <motion.div
              key={label}
              className="absolute left-1/2 top-1/2 flex size-11 items-center justify-center rounded-xl border border-border bg-surface shadow-sm"
              style={{ x, y, marginLeft: -22, marginTop: -22 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: -360 }}
              transition={{
                scale: { duration: 0.4, delay: 0.6 + i * 0.08, ease: "backOut" },
                opacity: { duration: 0.4, delay: 0.6 + i * 0.08 },
                rotate: {
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <Icon className="size-5 text-muted-foreground" />
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/25"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "backOut" }}
      >
        <motion.span
          className="absolute inset-0 rounded-2xl bg-primary"
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <Sparkle className="size-9 text-primary-foreground" fill="currentColor" />
      </motion.div>
    </div>
  );
}