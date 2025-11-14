"use client";

import { Habit } from "../lib/habits";
import HabitCard from "./HabitCard";

export default function HabitList({ habits, onChange }: { habits: Habit[]; onChange: (list: Habit[]) => void }) {
  if (habits.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center text-gray-600">
        No habits yet. Create your first one above.
      </div>
    );
  }

  return (
    <div className="grid grid-auto-fit gap-4 sm:grid-cols-2">
      {habits.map((h) => (
        <HabitCard key={h.id} habit={h} onUpdated={onChange} />
      ))}
    </div>
  );
}
