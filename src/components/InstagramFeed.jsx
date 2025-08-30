import React from 'react';
import { Instagram } from 'lucide-react';

// This component provides a lightweight, privacy-friendly Instagram section.
// It displays a faux feed grid using remote images and links to the Instagram profile.
// Replace the username prop to point to the co-op's Instagram.

export default function InstagramFeed({ username = 'urbancoop' }) {
  const images = [
    'https://images.unsplash.com/photo-1524594227086-731445ab2849?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1595247314393-68afc5f1c676?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1615486363871-5d8f3eb8b9d7?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524594364649-1e373521e8b0?q=80&w=800&auto=format&fit=crop'
  ];

  return (
    <section id="instagram" className="scroll-mt-24">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-stone-900">Latest on Instagram</h3>
          <p className="text-stone-700">Follow along for garden updates, tips, and co-op life.</p>
        </div>
        <a
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-700 to-amber-700 px-3 py-1.5 text-sm font-medium text-white shadow hover:opacity-95"
        >
          <Instagram className="h-4 w-4" /> Follow @{username}
        </a>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white p-4 sm:p-6 shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {images.map((src, i) => (
            <a
              key={i}
              href={`https://instagram.com/${username}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open Instagram post ${i + 1}`}
              className="group relative block overflow-hidden rounded-lg"
            >
              <img src={src} alt="Urban farm Instagram preview" className="h-36 w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </a>
          ))}
        </div>
        <p className="mt-3 text-xs text-stone-600">
          For live posts, connect your Instagram in this section by replacing the username or embedding specific posts.
        </p>
      </div>
    </section>
  );
}
