import React, { useState } from 'react';
import { Phone, MapPin, Copy, Check, UtensilsCrossed } from 'lucide-react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { Btn, Reveal, SectionTitle } from '@/components/Ui';
import { IMG, HOURS, PHONE, PHONE_TEL, ADDRESS_LINE1, ADDRESS_LINE2, ADDRESS_CITY, MAP_EMBED, GOOGLE_MAPS_URL, todayHours } from '@/lib/site';

export default function VisitPage() {
  const [copied, setCopied] = useState(false);
  const today = todayHours();
  const address = `${ADDRESS_LINE1}, ${ADDRESS_CITY}`;
  const copy = async () => {
    try { await navigator.clipboard.writeText(address); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch (e) { /* noop */ }
  };
  return (
    <Layout>
      <Seo title="Visit Us | Happy Rolls Ottawa — 1195 Wellington St. W" description="Find Happy Rolls at 1195 Wellington St. W, Ottawa. Hours, directions and phone." />
      <section className="pt-32 md:pt-40 pb-16">
        <div className="mx-auto max-w-[90rem] px-6 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <SectionTitle eyebrow="Come say hi">Visit Happy Rolls</SectionTitle>
            <p className="mt-6 text-xl font-display font-medium text-chocolate leading-snug">
              {ADDRESS_LINE1}<br />
              <span className="text-muted-foreground font-normal text-lg">{ADDRESS_LINE2}</span><br />
              Ottawa, Ontario<br />K1Y 2Z6
            </p>
            <p className="mt-4 text-muted-foreground">Phone: <a href={`tel:${PHONE_TEL}`} className="text-caramel font-semibold">{PHONE}</a></p>

            <div className="mt-6 rounded-2xl bg-pistachio/20 p-4 text-chocolate">Today ({today.day}): <span className="font-semibold">{today.time}</span></div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Btn href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" variant="primary"><MapPin className="h-5 w-5" /> Open in Google Maps</Btn>
              <Btn href={`tel:${PHONE_TEL}`} variant="caramel"><Phone className="h-5 w-5" /> Call Now</Btn>
              <Btn onClick={copy} variant="outline">{copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />} {copied ? 'Copied' : 'Copy Address'}</Btn>
              <Btn to="/menu" variant="strawberry"><UtensilsCrossed className="h-5 w-5" /> View Menu</Btn>
            </div>

            <div className="mt-8 rounded-2xl border border-caramel/40 bg-card p-5 text-sm text-chocolate">
              Happy Rolls is located on the Hamilton Avenue North side of 1195 Wellington Street West.
            </div>

            <div className="mt-8">
              <h3 className="font-display font-bold text-chocolate text-xl mb-3">Hours</h3>
              <ul className="rounded-2xl overflow-hidden border border-border">
                {HOURS.map((h) => (
                  <li key={h.day} className={`flex justify-between px-4 py-3 text-sm ${h.day === today.day ? 'bg-pistachio/20 font-semibold text-chocolate' : 'bg-card text-muted-foreground'}`}>
                    <span>{h.day}</span><span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="space-y-4">
            <iframe title="Happy Rolls location" src={MAP_EMBED} className="w-full h-80 rounded-3xl border border-border" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <img src={IMG.storefront} alt="Happy Rolls storefront on Wellington Street West to help locate the entrance" loading="lazy" className="w-full h-64 object-cover rounded-3xl" />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
