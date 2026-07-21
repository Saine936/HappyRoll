import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { NAV, GOOGLE_MAPS_URL, PHONE, PHONE_TEL } from '@/lib/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const transparentBase = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const solid = scrolled || !transparentBase;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${solid ? 'bg-background/92 backdrop-blur-md border-b border-border/70' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 flex items-center justify-between h-[70px] md:h-[86px]">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Happy Rolls home">
          <img src="/happyrolllogo.jpg" alt="Happy Rolls" className="h-11 w-11 md:h-12 md:w-12 transition-transform duration-500 group-hover:scale-105" />
          <span className={`font-display font-semibold text-lg md:text-xl tracking-tight transition-colors ${solid ? 'text-forest' : 'text-white drop-shadow-sm'}`}>Happy Rolls</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) =>
              `relative px-4 py-2 font-sans text-sm font-medium tracking-wide transition-colors ${
                solid ? 'text-charcoal/80 hover:text-forest' : 'text-white/85 hover:text-white'
              } ${isActive ? (solid ? '!text-forest' : '!text-white') : ''} after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive ? 'after:scale-x-100' : ''}`}>
              {n.label}
            </NavLink>
          ))}
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer"
            className={`ml-3 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-sm font-medium tracking-wide transition-all duration-300 ${solid ? 'bg-forest text-[hsl(var(--cream))] hover:bg-[hsl(var(--forest-deep))]' : 'border border-white/70 text-white hover:bg-white hover:text-forest'}`}>
            <MapPin className="h-4 w-4" strokeWidth={1.75} /> Get Directions
          </a>
        </nav>

        <button className="lg:hidden p-2 -mr-2 z-50 relative" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="text-[hsl(var(--cream))]" /> : <Menu className={solid ? 'text-forest' : 'text-white'} />}
        </button>
      </div>

      {/* Fullscreen mobile menu */}
      <div className={`lg:hidden fixed inset-0 bg-forest transition-all duration-500 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full px-8 pt-28 pb-12">
          <nav className="flex flex-col gap-1">
            {NAV.map((n, i) => (
              <NavLink key={n.to} to={n.to} style={{ transitionDelay: open ? `${120 + i * 55}ms` : '0ms' }}
                className={({ isActive }) =>
                  `font-display text-3xl py-3 border-b border-[hsl(var(--cream))]/15 transition-all duration-500 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} ${isActive ? 'text-[hsl(var(--cream))]' : 'text-[hsl(var(--cream))]/70'}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--cream))] px-5 py-4 font-sans font-medium text-forest">
              <MapPin className="h-5 w-5" strokeWidth={1.75} /> Get Directions
            </a>
            <a href={`tel:${PHONE_TEL}`}
              className="flex items-center justify-center gap-2 rounded-full border border-[hsl(var(--cream))]/40 px-5 py-4 font-sans font-medium text-[hsl(var(--cream))]">
              <Phone className="h-5 w-5" strokeWidth={1.75} /> Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
