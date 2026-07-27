import Link from "next/link";
import { Sparkle, MessageSquare, Layers, ListChecks } from "lucide-react";

import { ThemeToggle } from "@/components/shared/theme-toggle";

const highlights = [
  { icon: MessageSquare, text: "An AI tutor that knows your courses" },
  { icon: Layers, text: "Flashcards generated from your own notes" },
  { icon: ListChecks, text: "Every deadline tracked in one place" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-full lg:grid-cols-2">
      <div className="relative flex flex-col p-6 sm:p-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkle className="size-4" fill="currentColor" />
            </span>
            <span className="text-[15px] tracking-tight">AI Student Hub</span>
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>

      <div className="relative hidden overflow-hidden bg-primary lg:block">
        <div
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.14),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(255,255,255,0.12),transparent_45%)]"
          aria-hidden="true"
        />
        <div className="relative flex h-full flex-col justify-between p-12">
          <div />

          <div className="max-w-md">
            <p className="text-2xl font-medium leading-snug text-primary-foreground text-balance">
              &ldquo;It doesn&apos;t feel like another dashboard I have to
              maintain. It feels like the one that replaced the other
              five.&rdquo;
            </p>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Priya N. — Applied Physics, Year 2
            </p>
          </div>

          <ul className="space-y-4">
            {highlights.map((h) => (
              <li
                key={h.text}
                className="flex items-center gap-3 text-primary-foreground/90"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <h.icon className="size-4" />
                </span>
                <span className="text-sm">{h.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}