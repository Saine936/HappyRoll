import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { Btn, Reveal } from '@/components/Ui';
import { MENU, WAFFLE_TOPPINGS, PHONE, PHONE_TEL, GOOGLE_MAPS_URL } from '@/lib/site';

export default function MenuPage() {
  return (
    <Layout>
      <Seo title="Menu | Happy Rolls Ottawa — Rolled Ice Cream, Banana Pudding & Waffles" description="Explore the Happy Rolls menu: Liège waffles, banana pudding, rolled ice cream and chocolate strawberry cups in Ottawa." />

      <section className="pt-28 md:pt-36 pb-10 bg-chocolate text-[hsl(var(--cream))]">
        <div className="mx-auto max-w-[72rem] px-6 text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl">The Happy Rolls Menu</h1>
          <p className="mt-4 text-[hsl(var(--cream))]/80 max-w-2xl mx-auto text-sm md:text-base">
            Menu items, flavours and availability may change. Contact Happy Rolls or check its social media pages for current availability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {MENU.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="rounded-full bg-[hsl(var(--cream))]/10 hover:bg-strawberry px-5 py-2.5 font-display font-semibold transition-colors">{c.title}</a>
            ))}
          </div>
        </div>
      </section>

      {MENU.map((cat, ci) => (
        <section key={cat.id} id={cat.id} className={`scroll-mt-24 py-16 md:py-24 ${ci % 2 ? 'bg-[hsl(var(--muted))]' : ''}`}>
          <div className="mx-auto max-w-[72rem] px-6">
            <Reveal className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-center mb-12">
              <img src={cat.img} alt={cat.title} loading="lazy" className="rounded-3xl object-cover aspect-[4/3] w-full shadow-lg" />
              <div>
                <h2 className="font-display font-bold text-chocolate text-3xl md:text-5xl">{cat.title}</h2>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{cat.intro}</p>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {cat.items.map((it) => (
                <div key={it.name} className="bg-card rounded-2xl p-6 border border-border/60">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display font-bold text-lg text-chocolate">{it.name}</h3>
                    <span className="font-display font-bold text-caramel whitespace-nowrap">{it.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  {it.flavours && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {it.flavours.map((f) => <li key={f} className="rounded-full bg-pistachio/20 px-3 py-1 text-xs font-display font-medium text-chocolate">{f}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {cat.id === 'waffles' && (
              <div className="mt-8 bg-card rounded-2xl p-6 border border-dashed border-caramel/60">
                <h3 className="font-display font-bold text-chocolate text-xl">Extra Waffle Toppings</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {WAFFLE_TOPPINGS.map((t) => <li key={t} className="rounded-full bg-[hsl(var(--muted))] px-4 py-2 text-sm font-display font-medium text-chocolate">{t}</li>)}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground italic">PLACEHOLDER: some extra-topping prices are not fully readable from the current menu and must be confirmed before publishing. No prices have been invented.</p>
              </div>
            )}
            {cat.id === 'rolled' && (
              <p className="mt-6 text-xs text-muted-foreground italic">Specific ingredients for the Dubai Chocolate rolled ice cream are not listed until confirmed by the business.</p>
            )}
          </div>
        </section>
      ))}

      <section className="py-14 bg-espresso text-[hsl(var(--cream))]/85">
        <div className="mx-auto max-w-[72rem] px-6 space-y-4 text-sm text-center">
          <p>Prices, flavours and product availability are subject to change. Please contact Happy Rolls directly for current availability.</p>
          <p>Please inform our team of any allergies before ordering. Products may contain or come into contact with dairy, nuts, gluten, eggs, soy and other allergens.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Btn href={`tel:${PHONE_TEL}`} variant="strawberry"><Phone className="h-5 w-5" /> Call {PHONE}</Btn>
            <Btn href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" variant="caramel"><MapPin className="h-5 w-5" /> Get Directions</Btn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
