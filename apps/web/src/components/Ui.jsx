import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in-view' : ''} ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function Stars({ className = 'h-5 w-5', value = 5 }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} ${i < value ? 'fill-current text-forest' : 'text-forest/25'}`} strokeWidth={1.5} />
      ))}
    </span>
  );
}

const base = 'inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-wide transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest';
const sizes = { md: 'px-6 py-3 text-sm', lg: 'px-8 py-4 text-base' };
const variants = {
  primary: 'bg-forest text-[hsl(var(--cream))] hover:bg-[hsl(var(--forest-deep))] shadow-md shadow-[hsl(var(--forest))]/25',
  strawberry: 'bg-forest text-[hsl(var(--cream))] hover:bg-[hsl(var(--forest-deep))] shadow-md shadow-[hsl(var(--forest))]/25',
  caramel: 'bg-[hsl(var(--cream))] text-forest hover:bg-white shadow-md shadow-black/5',
  outline: 'border border-forest text-forest hover:bg-forest hover:text-[hsl(var(--cream))]',
  ghost: 'text-forest underline-offset-4 hover:underline',
};

export function Btn({ to, href, children, variant = 'primary', size = 'md', className = '', ...rest }) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}

export function SectionTitle({ eyebrow, children, className = '', center }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} ${className}`}>
      {eyebrow && <p className="font-sans font-medium uppercase tracking-luxe text-xs text-forest mb-4">{eyebrow}</p>}
      <h2 className="font-display font-semibold text-chocolate text-3xl sm:text-4xl md:text-5xl leading-[1.1]">{children}</h2>
    </div>
  );
}
