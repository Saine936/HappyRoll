import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Star, MapPin, Phone } from 'lucide-react';
import { NAV, HOURS, PHONE, PHONE_TEL, ADDRESS_LINE1, ADDRESS_LINE2, ADDRESS_CITY, INSTAGRAM_URL, GOOGLE_REVIEWS_URL } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-forest text-[hsl(var(--cream))]/85">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 py-16 md:py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img src="/happyrolllogo.jpg" alt="Happy Rolls" className="h-16 w-16" />
            <div>
              <div className="font-display text-2xl text-[hsl(var(--cream))]">Happy Rolls</div>
              <p className="text-xs uppercase tracking-luxe text-[hsl(var(--cream))]/60 mt-1">Ottawa · Dessert Café</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed max-w-xs text-[hsl(var(--cream))]/75">
            Fresh rolled ice cream, handcrafted waffles, creamy banana pudding and specialty drinks made fresh every day.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid place-items-center h-10 w-10 rounded-full border border-[hsl(var(--cream))]/25 hover:bg-[hsl(var(--cream))] hover:text-forest transition-colors"><Instagram className="h-4 w-4" strokeWidth={1.75} /></a>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" aria-label="Google Reviews" className="grid place-items-center h-10 w-10 rounded-full border border-[hsl(var(--cream))]/25 hover:bg-[hsl(var(--cream))] hover:text-forest transition-colors"><Star className="h-4 w-4" strokeWidth={1.75} /></a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-luxe text-[hsl(var(--cream))] mb-5">Explore</h3>
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-[hsl(var(--cream))] transition-colors">{n.label}</Link></li>)}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-luxe text-[hsl(var(--cream))] mb-5">Visit</h3>
          <p className="text-sm leading-relaxed text-[hsl(var(--cream))]/75">{ADDRESS_LINE1}<br />{ADDRESS_LINE2}<br />{ADDRESS_CITY}</p>
          <a href={`tel:${PHONE_TEL}`} className="mt-3 inline-flex items-center gap-2 text-sm hover:text-[hsl(var(--cream))]"><Phone className="h-4 w-4" strokeWidth={1.75} /> {PHONE}</a>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-luxe text-[hsl(var(--cream))] mb-5">Hours</h3>
          <ul className="space-y-1.5 text-sm">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-4 border-b border-[hsl(var(--cream))]/10 py-1">
                <span>{h.day}</span><span className="text-[hsl(var(--cream))]/60">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[hsl(var(--cream))]/12">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[hsl(var(--cream))]/55">
          <p>© {new Date().getFullYear()} Happy Rolls. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Wellington West, Ottawa, Ontario</p>
        </div>
      </div>
    </footer>
  );
}
