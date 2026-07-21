import React from 'react';
import { Phone, MapPin, UtensilsCrossed } from 'lucide-react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { Btn, Reveal, Stars, SectionTitle } from '@/components/Ui';
import { REVIEWS, RATING, REVIEW_COUNT, PHONE, PHONE_TEL, GOOGLE_MAPS_URL, GOOGLE_REVIEWS_URL } from '@/lib/site';

const THEMES = ['Excellent banana pudding', 'Premium hot chocolate', 'Creamy rolled ice cream', 'Friendly customer service', 'Unique flavours', 'Fun preparation experience', 'Evening opening hours', 'Generous portions', 'Guests travelling to visit'];

export default function ReviewsPage() {
  return (
    <Layout>
      <Seo title="Reviews | Happy Rolls Ottawa" description="See why Ottawa dessert fans rate Happy Rolls approximately 4.9 stars from more than 440 reviews." />
      <section className="pt-32 md:pt-40 pb-14 text-center">
        <div className="mx-auto max-w-[56rem] px-6">
          <Reveal>
            <Stars className="h-7 w-7" />
            <SectionTitle center className="mt-4" eyebrow="Reviews">Loved by Ottawa Dessert Fans</SectionTitle>
            <p className="mt-4 text-muted-foreground text-lg">Rated approximately {RATING} stars by more than {REVIEW_COUNT.replace('+','')} dessert lovers.</p>
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {THEMES.map((t) => <li key={t} className="rounded-full bg-pistachio/20 px-4 py-2 text-sm font-display font-medium text-chocolate">{t}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-[90rem] px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 50}>
              <blockquote className="bg-card rounded-3xl p-7 h-full border border-border/60 flex flex-col">
                <Stars className="h-4 w-4" />
                <p className="mt-4 text-chocolate leading-relaxed flex-1">"{r.text}"</p>
                <footer className="mt-4 font-display font-semibold text-caramel text-sm">{r.theme} · Google review</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[56rem] px-6">
          <Reveal className="bg-chocolate text-[hsl(var(--cream))] rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display font-bold text-2xl md:text-4xl">A Premium Dessert Experience</h2>
            <p className="mt-5 text-[hsl(var(--cream))]/85 leading-relaxed">
              Some customers describe the products as premium-priced, while many highlight the quality, creativity, portion sizes and fresh preparation. Happy Rolls focuses on creating memorable specialty desserts rather than basic grab-and-go treats.
            </p>
            <Btn href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" variant="strawberry" size="lg" className="mt-8">Read More Google Reviews</Btn>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 text-center">
        <div className="mx-auto max-w-[56rem] px-6">
          <SectionTitle center>Ready to Try It for Yourself?</SectionTitle>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Btn href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" variant="primary"><MapPin className="h-5 w-5" /> Get Directions</Btn>
            <Btn to="/menu" variant="caramel"><UtensilsCrossed className="h-5 w-5" /> View Menu</Btn>
            <Btn href={`tel:${PHONE_TEL}`} variant="strawberry"><Phone className="h-5 w-5" /> Call Now</Btn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
