"use client";

import { useEffect, useState } from "react";
import HabitForm from "../components/HabitForm";
import HabitList from "../components/HabitList";
import { Habit, listHabits } from "../lib/habits";

export default function Page() {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    setHabits(listHabits());
  }, []);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Your habits</h1>
        <p className="text-gray-600">Track daily progress and build streaks.</p>
      </div>

      <HabitForm onAdded={setHabits} />

      <HabitList habits={habits} onChange={setHabits} />
    </div>
  );
}
