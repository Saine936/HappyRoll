import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, UtensilsCrossed } from 'lucide-react';
import { PHONE_TEL, GOOGLE_MAPS_URL } from '@/lib/site';

export default function MobileActionBar() {
  const item = 'flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-sans font-medium tracking-wide flex-1 text-forest';
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border shadow-[0_-4px_24px_rgba(0,0,0,0.06)] flex" aria-label="Quick actions">
      <a href={`tel:${PHONE_TEL}`} className={item}><Phone className="h-5 w-5" strokeWidth={1.6} /> Call</a>
      <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className={item}><MapPin className="h-5 w-5" strokeWidth={1.6} /> Directions</a>
      <Link to="/menu" className={item}><UtensilsCrossed className="h-5 w-5" strokeWidth={1.6} /> Menu</Link>
    </nav>
  );
}
