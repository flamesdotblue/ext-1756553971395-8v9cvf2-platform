import React, { useMemo, useState } from 'react';
import { Calendar } from 'lucide-react';

function generateMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startWeekday = firstDay.getDay(); // 0 Sun - 6 Sat
  const daysInMonth = lastDay.getDate();

  const weeks = [];
  let current = 1 - startWeekday; // may be negative, representing prev month days

  while (current <= daysInMonth) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(year, month, current);
      week.push(date);
      current++;
    }
    weeks.push(week);
    if (weeks.length > 6) break; // safety
  }
  return weeks;
}

export default function EventsCalendar({ events = [] }) {
  const today = new Date();
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });

  const eventsByDay = useMemo(() => {
    const map = new Map();
    events.forEach((e) => {
      const key = new Date(e.date.getFullYear(), e.date.getMonth(), e.date.getDate()).toDateString();
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(e);
    });
    return map;
  }, [events]);

  const matrix = useMemo(() => generateMonthMatrix(view.year, view.month), [view]);
  const monthName = new Date(view.year, view.month).toLocaleString(undefined, { month: 'long', year: 'numeric' });

  const upcoming = useMemo(() => {
    const now = new Date();
    return events
      .filter((e) => e.date >= new Date(now.getFullYear(), now.getMonth(), now.getDate()))
      .sort((a, b) => a.date - b.date)
      .slice(0, 4);
  }, [events]);

  return (
    <section id="events" className="scroll-mt-24">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-stone-900">Calendar</h3>
          <p className="text-stone-700">Workshops, compost drop-offs, and harvest days.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView((v) => ({ year: v.month === 0 ? v.year - 1 : v.year, month: v.month === 0 ? 11 : v.month - 1 }))}
            className="rounded-md border border-stone-300 bg-white px-2 py-1 text-sm text-stone-800 hover:border-emerald-600"
            aria-label="Previous month"
          >
            ←
          </button>
          <div className="text-sm font-medium text-stone-700">{monthName}</div>
          <button
            onClick={() => setView((v) => ({ year: v.month === 11 ? v.year + 1 : v.year, month: v.month === 11 ? 0 : v.month + 1 }))}
            className="rounded-md border border-stone-300 bg-white px-2 py-1 text-sm text-stone-800 hover:border-emerald-600"
            aria-label="Next month"
          >
            →
          </button>
          <button
            onClick={() => setView({ year: today.getFullYear(), month: today.getMonth() })}
            className="ml-2 hidden sm:inline-flex items-center gap-2 rounded-md bg-emerald-700 px-3 py-1.5 text-sm text-white hover:bg-emerald-800"
          >
            <Calendar className="h-4 w-4" /> Today
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="sm:col-span-2 rounded-xl border border-stone-200 bg-white p-4 sm:p-6 shadow-sm">
          <div className="grid grid-cols-7 text-center text-xs font-medium text-stone-600">
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
              <div key={d} className="py-2">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {matrix.flat().map((date, idx) => {
              const inMonth = date.getMonth() === view.month;
              const isToday = date.toDateString() === new Date().toDateString();
              const key = new Date(date.getFullYear(), date.getMonth(), date.getDate()).toDateString();
              const dayEvents = eventsByDay.get(key) || [];
              return (
                <div
                  key={idx}
                  className={`min-h-[78px] rounded-md border p-1 text-xs ${inMonth ? 'bg-white border-stone-200' : 'bg-stone-50 border-stone-200/70 text-stone-400'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`h-6 w-6 inline-flex items-center justify-center rounded ${isToday ? 'bg-emerald-100 text-emerald-800' : ''}`}>{date.getDate()}</span>
                    {dayEvents.length > 0 && (
                      <span className="ml-1 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white text-[10px] px-1.5 py-0.5">
                        {dayEvents.length}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 space-y-1">
                    {dayEvents.slice(0,2).map((e) => (
                      <div key={e.id} className="truncate rounded bg-emerald-50 px-1.5 py-0.5 text-emerald-800">
                        {e.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-stone-200 bg-white p-4 sm:p-6 shadow-sm">
          <h4 className="font-semibold text-stone-900">Upcoming</h4>
          <ul className="mt-3 space-y-3">
            {upcoming.length === 0 && (
              <li className="text-sm text-stone-600">No upcoming events this month.</li>
            )}
            {upcoming.map((e) => (
              <li key={e.id} className="rounded-lg border border-stone-200 p-3">
                <div className="text-xs text-stone-500">
                  {e.date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })} • {e.time}
                </div>
                <div className="font-medium text-stone-900">{e.title}</div>
                <div className="text-xs text-stone-600">{e.location}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
