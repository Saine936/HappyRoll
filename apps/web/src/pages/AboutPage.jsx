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

    
    </Layout>
  );
}
