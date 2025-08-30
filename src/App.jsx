import React from 'react';
import Header from './components/Header';
import Offerings from './components/Offerings';
import EventsCalendar from './components/EventsCalendar';
import InstagramFeed from './components/InstagramFeed';

const events = [
  {
    id: 1,
    title: 'Intro to Urban Farming Workshop',
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 6),
    time: '10:00 AM - 12:00 PM',
    location: 'Co-op Garden Hub',
    description: 'Hands-on basics of soil, seeds, and seasonal planting.'
  },
  {
    id: 2,
    title: 'Compost Drop-off + Learn',
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 12),
    time: '8:00 AM - 11:00 AM',
    location: 'Alley-side Compost Station',
    description: 'Bring your scraps and learn how we turn waste into soil.'
  },
  {
    id: 3,
    title: 'Harvest & Pack: Produce Boxes',
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 18),
    time: '1:00 PM - 3:00 PM',
    location: 'Packing Shed',
    description: 'Join the team to harvest and pack weekly produce boxes.'
  },
  {
    id: 4,
    title: 'Advanced Composting Workshop',
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 24),
    time: '4:00 PM - 6:00 PM',
    location: 'Co-op Garden Hub',
    description: 'Dive deep into hot composting, carbon/nitrogen ratios, and troubleshooting.'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-stone-100 text-stone-800">
      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="mt-8 sm:mt-12 grid gap-6 sm:gap-8">
          <Offerings />
          <EventsCalendar events={events} />
          <InstagramFeed username="urbancoop" />
        </section>
      </main>

      <footer className="mt-16 border-t border-stone-200 bg-stone-50/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-stone-600">© {new Date().getFullYear()} Your Local Urban Farming Co-op. All rights reserved.</p>
          <div className="text-sm text-stone-600">
            Made with care for the soil and our city.
          </div>
        </div>
      </footer>
    </div>
  );
}
