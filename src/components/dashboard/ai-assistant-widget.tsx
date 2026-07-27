import Link from "next/link";
import { Sparkle, ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { suggestedPrompts } from "@/data";

export function AiAssistantWidget() {
  return (
    <Card className="overflow-hidden border-primary/30 bg-primary/5">
      <CardContent className="p-5">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkle className="size-4" fill="currentColor" />
          </span>
          <p className="font-semibold">Ask the AI tutor</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {suggestedPrompts.map((prompt) => (
            <span
              key={prompt}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
            >
              {prompt}
            </span>
          ))}
        </div>

        <Button asChild className="mt-4 w-full">
          <Link href="/ai-tutor">
            Open AI Tutor
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}