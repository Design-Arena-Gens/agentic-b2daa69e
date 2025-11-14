"use client";

import { useState } from "react";
import { Habit, addHabit, createHabit } from "../lib/habits";

export default function HabitForm({ onAdded }: { onAdded: (list: Habit[]) => void }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#4f46e5");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const h = createHabit(name.trim(), color);
    const list = addHabit(h);
    setName("");
    onAdded(list);
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Habit name</label>
        <input className="input mt-1" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Read 20 minutes" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Color</label>
        <input type="color" className="mt-1 h-10 w-16 cursor-pointer rounded-md border" value={color} onChange={e => setColor(e.target.value)} />
      </div>
      <button className="btn">Add habit</button>
    </form>
  );
}
