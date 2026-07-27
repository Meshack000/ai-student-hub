import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { courses } from "@/data";

export function RecentCourses() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle>Your courses</CardTitle>
        <Link
          href="/courses"
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          View all
          <ArrowUpRight className="size-3.5" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          {courses.map((course) => (
            <Link
              key={course.id}
              href="/courses"
              className="rounded-lg border border-border p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: course.color }}
                />
                <p className="truncate text-sm font-medium">{course.code}</p>
              </div>
              <p className="mt-1 truncate text-xs text-muted-foreground">
                {course.title}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <Progress value={course.progress} className="h-1.5" />
                <span className="shrink-0 text-xs text-muted-foreground">
                  {course.progress}%
                </span>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}