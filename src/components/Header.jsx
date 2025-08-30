import React from 'react';
import { Leaf } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
              <Leaf className="h-5 w-5" />
            </span>
            <div>
              <h1 className="text-lg font-semibold text-stone-800">Local Urban Farming Co-op</h1>
              <p className="text-xs text-stone-600">Workshops • Produce Boxes • Compost</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-stone-700">
            <a href="#offerings" className="hover:text-emerald-700">Offerings</a>
            <a href="#events" className="hover:text-emerald-700">Events</a>
            <a href="#instagram" className="hover:text-emerald-700">Instagram</a>
          </div>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-2xl border border-stone-200 bg-white/80 backdrop-blur shadow-sm p-6 sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-stone-900">Grow together. Eat better. Close the loop.</h2>
              <p className="mt-3 text-stone-700">We’re a neighborhood co-op teaching regenerative practices, delivering seasonal produce boxes, and turning food scraps into living soil.</p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a href="#events" className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-4 py-2 text-white shadow hover:bg-emerald-800 transition">View Calendar</a>
                <a href="#offerings" className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-4 py-2 text-stone-800 hover:border-emerald-600 transition">Explore Offerings</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1524594227086-731445ab2849?q=80&w=1600&auto=format&fit=crop"
                  alt="Community members harvesting greens in an urban garden"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden sm:block rounded-lg bg-amber-100 text-amber-900 text-xs px-3 py-2 border border-amber-200 shadow">Member-owned • Soil-first</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
