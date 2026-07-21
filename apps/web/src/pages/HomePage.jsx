import React from 'react';
import { Phone, MapPin, UtensilsCrossed, Instagram, Sparkles, Heart, Clock, IceCream } from 'lucide-react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { Btn, Reveal, Stars, SectionTitle } from '@/components/Ui';
import { IMG, FAVOURITES, REVIEWS, PHONE, PHONE_TEL, RATING, REVIEW_COUNT, GOOGLE_MAPS_URL, GOOGLE_REVIEWS_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE, ADDRESS_LINE1, ADDRESS_LINE2, ADDRESS_CITY, MAP_EMBED, todayHours } from '@/lib/site';
const GALLERY = [IMG.rolling, IMG.bananaPudding, IMG.waffle, IMG.chocStraw, IMG.ferrero, IMG.pistachio, IMG.hotChoc, IMG.oreoRoll, IMG.strawBanana];
const WHY = [{
  icon: Sparkles,
  title: 'Freshly Made',
  text: 'Rolled ice cream and many desserts are prepared fresh with attention to flavour, texture and presentation.'
}, {
  icon: IceCream,
  title: 'Creative Flavours',
  text: 'Enjoy customer favourites such as cookie butter, Ferrero Rocher, pistachio kunafa and Dubai chocolate.'
}, {
  icon: Heart,
  title: 'Friendly Service',
  text: 'Happy Rolls is known for welcoming hospitality and patient, helpful service.'
}, {
  icon: Clock,
  title: 'Evening Dessert Stop',
  text: 'Open until 9:00 p.m. most nights and 10:00 p.m. on Fridays and Saturdays.'
}];
export default function HomePage() {
  const today = todayHours();
  return <Layout>
      <Seo description="Visit Happy Rolls in Ottawa for fresh rolled ice cream, creamy banana pudding, warm Liège waffles, chocolate strawberry cups and unique pistachio kunafa desserts." />

      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center">
        <img src={IMG.hero} alt="Indulgent Happy Rolls dessert with rolled ice cream, chocolate strawberries and waffle" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--forest-deep))]/90 via-[hsl(var(--forest-deep))]/45 to-[hsl(var(--forest-deep))]/35" />
        <div className="relative mx-auto max-w-[90rem] w-full px-6 sm:px-8 pt-28 pb-20 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-xs uppercase tracking-luxe text-[hsl(var(--cream))] mb-6">Wellington West · Ottawa</p>
            <h1 className="font-display font-medium text-[hsl(var(--cream))] text-[2.6rem] leading-[1.06] sm:text-6xl md:text-7xl">
              Ottawa's Favourite<br className="hidden sm:block" /> Dessert Experience
            </h1>
            <p className="mt-7 text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
              Fresh rolled ice cream, handcrafted waffles, creamy banana pudding, specialty drinks and unforgettable desserts made fresh every day.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Btn to="/menu" variant="caramel" size="lg"><UtensilsCrossed className="h-5 w-5" strokeWidth={1.6} /> View Menu</Btn>
              <Btn to="/visit" variant="outline" size="lg" className="!border-white/70 !text-white hover:!bg-white hover:!text-forest"><MapPin className="h-5 w-5" strokeWidth={1.6} /> Visit Us</Btn>
              <Btn href={`tel:${PHONE_TEL}`} variant="outline" size="lg" className="!border-white/70 !text-white hover:!bg-white hover:!text-forest"><Phone className="h-5 w-5" strokeWidth={1.6} /> Call Now</Btn>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-[10px] uppercase tracking-luxe animate-pulse">Scroll</div>
      </section>

      {/* Google review strip */}
      <div className="bg-forest text-[hsl(var(--cream))]">
        <div className="mx-auto max-w-[90rem] px-6 py-6 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-center">
          <div className="flex items-center gap-3">
            <Stars className="h-5 w-5 text-[hsl(var(--cream))]" />
            <span className="font-display text-2xl">{RATING}</span>
          </div>
          <span className="hidden sm:block h-6 w-px bg-[hsl(var(--cream))]/25" />
          <span className="font-sans text-sm tracking-wide">{REVIEW_COUNT} Reviews</span>
          <span className="hidden sm:block h-6 w-px bg-[hsl(var(--cream))]/25" />
          <span className="font-sans text-sm tracking-wide text-[hsl(var(--cream))]/80">One of Ottawa's highest-rated dessert destinations</span>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-beige text-forest py-3 overflow-hidden border-y border-border">
        <div className="flex whitespace-nowrap animate-marquee font-display text-base">
          {Array.from({
          length: 2
        }).map((_, r) => <span key={r} className="flex">
              {['Rolled Ice Cream', 'Banana Pudding', 'Liège Waffles', 'Chocolate Strawberries', 'Pistachio Kunafa', 'Dubai Chocolate', 'Specialty Lattes'].map(t => <span key={t} className="mx-6 inline-flex items-center gap-6">{t}<span className="text-forest/40">✦</span></span>)}
            </span>)}
        </div>
      </div>

      {/* Featured collections — editorial */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="font-sans text-xs uppercase tracking-luxe text-forest mb-4">The Collection</p>
            <h2 className="font-display text-4xl md:text-5xl text-chocolate leading-[1.1]">Handcrafted, Fresh, Unforgettable</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">A curated selection of the desserts Ottawa keeps coming back for.</p>
          </Reveal>

          <div className="space-y-24 md:space-y-32">
            {FAVOURITES.map((f, i) => {
              const flipped = i % 2 === 1;
              return (
                <Reveal key={f.name}>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className={`group overflow-hidden rounded-sm ${flipped ? 'lg:order-2' : ''}`}>
                      <img src={f.img} alt={f.name} loading="lazy" className="w-full aspect-[4/3] object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out" />
                    </div>
                    <div className={flipped ? 'lg:order-1 lg:pr-10' : 'lg:pl-10'}>
                      <p className="font-sans text-xs uppercase tracking-luxe text-forest mb-4">{String(i + 1).padStart(2, '0')} — {f.price}</p>
                      <h3 className="font-display text-3xl md:text-4xl text-chocolate leading-tight">{f.name}</h3>
                      <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">{f.desc}</p>
                      <Btn to="/menu" variant="ghost" className="mt-7 !px-0">Learn More →</Btn>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty drinks */}
      <section className="bg-beige">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-8 py-24 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <p className="font-sans text-xs uppercase tracking-luxe text-forest mb-4">Specialty Drinks</p>
            <h2 className="font-display text-3xl md:text-5xl text-chocolate leading-[1.1]">Sip Something Special</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              From our caramelized banana oat latte to seasonal creations and specialty coffee, our drinks are crafted with the same care as our desserts.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {['Caramelized Banana Oat Latte', 'Seasonal Lattes', 'Iced Coffee', 'Specialty Coffee'].map((d) => (
                <li key={d} className="flex items-center gap-3 border-b border-border pb-3 font-display text-lg text-chocolate">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest" />{d}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground italic">Available as seasonal offerings — ask in store for today's menu.</p>
          </Reveal>
          <Reveal className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img src={IMG.hotChoc} alt="Specialty latte at Happy Rolls" loading="lazy" className="rounded-sm object-cover aspect-[3/4] w-full" />
            <img src={IMG.customers} alt="Guests enjoying drinks at Happy Rolls" loading="lazy" className="rounded-sm object-cover aspect-[3/4] w-full mt-10" />
          </Reveal>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[90rem] px-6">
          <Reveal><SectionTitle eyebrow="Kind words" center className="max-w-2xl">Loved by Ottawa Dessert Fans</SectionTitle></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => <Reveal key={i} delay={i * 50}>
                <blockquote className="bg-card rounded-3xl p-7 h-full border border-border/60 flex flex-col">
                  <Stars className="h-4 w-4" />
                  <p className="mt-4 text-chocolate leading-relaxed flex-1">"{r.text}"</p>
                  <footer className="mt-4 font-display font-semibold text-caramel text-sm">{r.theme} · Google review</footer>
                </blockquote>
              </Reveal>)}
          </div>
          <div className="mt-12 text-center">
            <Btn href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" variant="outline" size="lg">Read More Google Reviews</Btn>
          </div>
        </div>
      </section>


      {/* Location preview */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[90rem] px-6 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <SectionTitle eyebrow="Find us">Visit Happy Rolls</SectionTitle>
            <p className="mt-5 text-lg text-chocolate font-display font-medium">{ADDRESS_LINE1}<br /><span className="text-muted-foreground font-normal">{ADDRESS_LINE2}</span><br />{ADDRESS_CITY}</p>
            <p className="mt-3 text-muted-foreground">Phone: <a href={`tel:${PHONE_TEL}`} className="text-caramel font-semibold">{PHONE}</a></p>
            <div className="mt-4 rounded-2xl bg-pistachio/20 p-4 text-sm text-chocolate">Today ({today.day}): <span className="font-semibold">{today.time}</span></div>
            <p className="mt-4 text-sm text-muted-foreground">Happy Rolls can be slightly tucked away—look for the entrance on the Hamilton Avenue North side and use the storefront photo below to find us.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Btn href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" variant="primary"><MapPin className="h-5 w-5" /> Get Directions</Btn>
              <Btn href={`tel:${PHONE_TEL}`} variant="caramel"><Phone className="h-5 w-5" /> Call Now</Btn>
            </div>
          </Reveal>
          <Reveal className="space-y-4">
            <iframe title="Happy Rolls location map" src={MAP_EMBED} className="w-full h-64 rounded-3xl border border-border" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <img src={IMG.storefront} alt="Happy Rolls storefront on Wellington Street West, Ottawa" loading="lazy" className="w-full h-48 object-cover rounded-3xl" />
          </Reveal>
        </div>
      </section>
        
    </Layout>;
}