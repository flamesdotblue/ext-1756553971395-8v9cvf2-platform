import React from 'react';
import { BookOpen, Package, Recycle } from 'lucide-react';

const cards = [
  {
    title: 'Hands-on Workshops',
    icon: BookOpen,
    color: 'bg-emerald-700',
    description: 'Seasonal workshops for all levels: seed starting, soil health, balcony gardening, and more.'
  },
  {
    title: 'Fresh Produce Boxes',
    icon: Package,
    color: 'bg-amber-700',
    description: 'Weekly or bi-weekly boxes packed with ultra-fresh, hyper-local produce harvested by members.'
  },
  {
    title: 'Compost Drop-offs',
    icon: Recycle,
    color: 'bg-stone-700',
    description: 'Bring your food scraps. We turn them into rich compost to feed our beds and your containers.'
  }
];

export default function Offerings() {
  return (
    <section id="offerings" className="scroll-mt-24">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-stone-900">What we offer</h3>
        <p className="text-stone-700">Accessible programs that reconnect people, food, and soil.</p>
      </div>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
            <div className="absolute -right-14 -top-14 h-28 w-28 rounded-full bg-emerald-100/50 blur-2xl" />
            <div className="p-5">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${c.color} text-white shadow` }>
                <c.icon className="h-5 w-5" />
              </div>
              <h4 className="mt-3 text-lg font-semibold text-stone-900">{c.title}</h4>
              <p className="mt-1 text-sm text-stone-700">{c.description}</p>
            </div>
            <div className="px-5 pb-5">
              <button className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-3 py-2 text-xs font-medium text-stone-800 hover:border-emerald-600 hover:text-emerald-800 transition">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
