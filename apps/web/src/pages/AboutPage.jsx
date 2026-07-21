import React from 'react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { Btn, Reveal, SectionTitle } from '@/components/Ui';
import { IMG } from '@/lib/site';

const GRID = [
  { img: IMG.prepping, alt: 'Staff preparing rolled ice cream' },
  { img: IMG.waffle, alt: 'Waffles being topped' },
  { img: IMG.bananaPudding, alt: 'Banana pudding being assembled' },
  { img: IMG.chocStraw, alt: 'Chocolate strawberry cups' },
  { img: IMG.customers, alt: 'Customers receiving their desserts' },
  { img: IMG.interior, alt: 'The Happy Rolls shop interior' },
];

export default function AboutPage() {
  return (
    <Layout>
      <Seo title="About Happy Rolls | Ottawa Dessert Shop" description="Happy Rolls is an Ottawa dessert shop built around creativity, quality and memorable experiences." />
      <section className="pt-32 md:pt-40 pb-16">
        <div className="mx-auto max-w-[56rem] px-6 text-center">
          <Reveal>
            <SectionTitle eyebrow="Our story" center>Made to Make You Happy</SectionTitle>
            <div className="mt-6 text-lg text-muted-foreground leading-relaxed space-y-4 text-left md:text-center">
              <p>Happy Rolls is an Ottawa dessert shop built around creativity, quality and memorable experiences. From rolled ice cream prepared right before your eyes to creamy banana pudding, warm Liège waffles and chocolate-covered strawberries, every item is designed to turn an ordinary day into something special.</p>
              <p>Our goal is simple: serve exciting desserts, welcome every customer with genuine hospitality and create a place people are excited to visit again.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-chocolate text-[hsl(var(--cream))]">
        <div className="mx-auto max-w-[90rem] grid lg:grid-cols-2 items-center">
          <img src={IMG.rolling} alt="Rolled ice cream being made fresh" loading="lazy" className="h-full w-full object-cover aspect-[4/3]" />
          <div className="p-8 md:p-16">
            <Reveal>
              <h2 className="font-display font-bold text-3xl md:text-5xl">More Than Dessert</h2>
              <p className="mt-5 text-[hsl(var(--cream))]/85 text-lg leading-relaxed">
                Customers visit Happy Rolls for the flavours, but they return for the experience. Friendly service, fresh preparation and creative menu items have helped Happy Rolls become a favourite dessert destination in Ottawa.
              </p>
              <Btn to="/menu" variant="strawberry" size="lg" className="mt-8">View the Menu</Btn>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[90rem] px-6">
          <Reveal><SectionTitle eyebrow="Behind the scenes" center>Every Dessert, Made With Care</SectionTitle></Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GRID.map((g, i) => (
              <Reveal key={i} delay={i * 50}>
                <img src={g.img} alt={g.alt} loading="lazy" className="rounded-3xl object-cover aspect-[4/3] w-full shadow-sm" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
