import { StatsRow } from "@/components/dashboard/stats-row";
import { TodayTasks } from "@/components/dashboard/today-tasks";
import { RecentCourses } from "@/components/dashboard/recent-courses";
import { StudyStreak } from "@/components/dashboard/study-streak";
import { UpcomingWidget } from "@/components/dashboard/upcoming-widget";
import { AiAssistantWidget } from "@/components/dashboard/ai-assistant-widget";
import { currentStudent } from "@/data";

export default function DashboardPage() {
  const firstName = currentStudent.name.split(" ")[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome back, {firstName}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Here&apos;s what&apos;s happening across your courses today.
        </p>
      </div>

      <StatsRow />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <TodayTasks />
          <RecentCourses />
        </div>
        <div className="space-y-6">
          <StudyStreak />
          <UpcomingWidget />
          <AiAssistantWidget />
        </div>
      </div>
    </div>
  );
}