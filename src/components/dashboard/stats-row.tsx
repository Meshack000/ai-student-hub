import { Clock, CheckCircle2, Target, Flame } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { studyStats } from "@/data";

const icons = [Clock, CheckCircle2, Target, Flame];
const tints = [
  "bg-primary/10 text-primary",
  "bg-success/10 text-success",
  "bg-accent/10 text-accent",
  "bg-warning/10 text-warning",
];

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {studyStats.map((stat, i) => {
        const Icon = icons[i % icons.length];
        return (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 p-5">
              <span
                className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${tints[i % tints.length]}`}
              >
                <Icon className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-2xl font-semibold leading-none">
                  {stat.value}
                  {stat.unit && (
                    <span className="ml-1 text-sm font-normal text-muted-foreground">
                      {stat.unit}
                    </span>
                  )}
                </p>
                <p className="mt-1 truncate text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}