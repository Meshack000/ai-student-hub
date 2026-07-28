import { Sparkle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { currentStudent } from "@/data";

export function StudyStreak() {
  return (
    <Card className="overflow-hidden border-primary/30 bg-primary/5">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>Your streak</CardTitle>
          <p className="text-sm text-muted-foreground">
            Keep going! Your current study streak is doing great.
          </p>
        </div>
        <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Sparkle className="size-5" />
        </span>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-4 p-5 pb-6">
        <div>
          <p className="text-4xl font-semibold leading-none">
            {currentStudent.studyStreak}
          </p>
          <p className="text-sm text-muted-foreground">days in a row</p>
        </div>
        <div className="rounded-3xl bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          Keep the momentum
        </div>
      </CardContent>
    </Card>
  );
}
