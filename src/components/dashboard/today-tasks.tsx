import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { assignments, courses } from "@/data";

const priorityVariant = {
  high: "danger",
  medium: "warning",
  low: "secondary",
} as const;

const statusLabel: Record<string, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  completed: "Completed",
  overdue: "Overdue",
};

export function TodayTasks() {
  const active = assignments
    .filter((a) => a.status !== "completed")
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
    .slice(0, 4);

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle>Assignments</CardTitle>
        <Link
          href="/assignments"
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          View all
          <ArrowUpRight className="size-3.5" />
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {active.map((a) => {
          const course = courses.find((c) => c.id === a.courseId);
          return (
            <div key={a.id} className="space-y-2">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{a.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {course?.code} · Due{" "}
                    {new Date(a.dueDate).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <Badge variant={priorityVariant[a.priority]} className="shrink-0">
                  {statusLabel[a.status]}
                </Badge>
              </div>
              <Progress value={a.progress} />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}