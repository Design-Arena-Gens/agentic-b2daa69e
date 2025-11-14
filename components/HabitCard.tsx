"use client";

import { addDays, format, startOfWeek } from "date-fns";
import { Habit, currentStreak, toggleCompletion, updateHabit, deleteHabit, weekCompletionCount } from "../lib/habits";

export default function HabitCard({ habit, onUpdated }: { habit: Habit; onUpdated: (list: Habit[]) => void }) {
  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 0 });
  const days = Array.from({ length: 7 }).map((_, i) => addDays(weekStart, i));

  function toggle(date: Date) {
    const h = toggleCompletion(habit, date);
    const list = updateHabit(h);
    onUpdated(list);
  }

  function onDelete() {
    const list = deleteHabit(habit.id);
    onUpdated(list);
  }

  const streak = currentStreak(habit, today);
  const weekCount = weekCompletionCount(habit, days);
  const percent = Math.round((weekCount / 7) * 100);

  return (
    <div className="card p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full" style={{ background: habit.color }} />
            <h3 className="truncate text-lg font-semibold">{habit.name}</h3>
          </div>
          <div className="mt-1 text-sm text-gray-500">
            Streak: <span className="font-medium text-gray-700">{streak} day{streak === 1 ? "" : "s"}</span>
          </div>
        </div>
        <button onClick={onDelete} className="btn-secondary text-sm">Delete</button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((d) => {
          const key = format(d, "yyyy-MM-dd");
          const isToday = format(d, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");
          const isChecked = habit.completions.includes(key);
          return (
            <button
              key={key}
              onClick={() => toggle(d)}
              className={`rounded-md border p-2 text-center text-sm transition ${
                isChecked ? "bg-green-100 border-green-300" : "bg-white hover:bg-gray-50"
              } ${isToday ? "ring-2 ring-brand-500" : ""}`}
              title={format(d, "EEE MMM d")}
            >
              <div className="font-medium">{format(d, "EE").slice(0, 1)}</div>
              <div className="text-xs text-gray-600">{format(d, "d")}</div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <div>Week: {weekCount}/7</div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-28 overflow-hidden rounded bg-gray-200">
            <div className="h-full bg-brand-600" style={{ width: `${percent}%` }} />
          </div>
          <div className="tabular-nums">{percent}%</div>
        </div>
      </div>
    </div>
  );
}
