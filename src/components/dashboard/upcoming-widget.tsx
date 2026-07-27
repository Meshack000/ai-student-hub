import Link from "next/link";
import { ArrowUpRight, GraduationCap, ListChecks, BookOpen } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { calendarEvents } from "@/data";

const typeConfig = {
  exam: { icon: GraduationCap, tint: "bg-danger/10 text-danger" },
  assignment: { icon: ListChecks, tint: "bg-warning/10 text-warning" },
  class: { icon: BookOpen, tint: "bg-primary/10 text-primary" },
};

export function UpcomingWidget() {
  const upcoming = [...calendarEvents]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 4);

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle>Upcoming</CardTitle>
        <Link
          href="/calendar"
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          Calendar
          <ArrowUpRight className="size-3.5" />
        </Link>
      </CardHeader>
      <CardContent className="space-y-1">
        {upcoming.map((event) => {
          const { icon: Icon, tint } = typeConfig[event.type];
          return (
            <div
              key={event.id}
              className="flex items-center gap-3 rounded-lg px-1 py-2"
            >
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${tint}`}
              >
                <Icon className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{event.title}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(event.date).toLocaleDateString(undefined, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                  {event.time && ` · ${event.time}`}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}