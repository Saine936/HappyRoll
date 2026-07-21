import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { Reveal, SectionTitle } from '@/components/Ui';
import { HOURS, PHONE, PHONE_TEL, ADDRESS_LINE1, ADDRESS_LINE2, ADDRESS_CITY } from '@/lib/site';

const CATEGORIES = ['General Question', 'Large Order', 'Collaboration', 'Event Inquiry', 'Feedback'];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // Simple spam honeypot protection
    if (form.company.value) return;
    if (!form.name.value.trim() || !form.email.value.trim() || !form.message.value.trim()) {
      setError('Please fill in your name, email and message.');
      return;
    }
    setError('');
    // PLACEHOLDER: connect a real contact form destination before publishing.
    setSent(true);
    form.reset();
  };

  const field = 'w-full rounded-xl border border-border bg-card px-4 py-3 text-chocolate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel';

  return (
    <Layout>
      <Seo title="Contact | Happy Rolls Ottawa" description="Contact Happy Rolls in Ottawa with questions, feedback or inquiries." />
      <section className="pt-32 md:pt-40 pb-20">
        <div className="mx-auto max-w-[90rem] px-6 grid lg:grid-cols-[1.3fr_1fr] gap-12">
          <Reveal>
            <SectionTitle eyebrow="Get in touch">Contact Happy Rolls</SectionTitle>
            <p className="mt-4 text-muted-foreground">Have a question or some kind words? Send us a note below.</p>

            {sent ? (
              <div className="mt-8 rounded-3xl bg-pistachio/25 p-8 text-center">
                <CheckCircle2 className="h-12 w-12 mx-auto text-chocolate" />
                <h3 className="mt-4 font-display font-bold text-2xl text-chocolate">Thank you!</h3>
                <p className="mt-2 text-muted-foreground">Your message has been received. We'll get back to you as soon as we can.</p>
                <button onClick={() => setSent(false)} className="mt-6 font-display font-semibold text-caramel underline underline-offset-4">Send another message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
                <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-display font-medium text-chocolate">Name</label>
                    <input id="name" name="name" className={field} required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-display font-medium text-chocolate">Email</label>
                    <input id="email" name="email" type="email" className={field} required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-display font-medium text-chocolate">Phone number</label>
                    <input id="phone" name="phone" type="tel" className={field} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-display font-medium text-chocolate">Subject</label>
                    <select id="subject" name="subject" className={field} defaultValue={CATEGORIES[0]}>
                      {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-display font-medium text-chocolate">Message</label>
                  <textarea id="message" name="message" rows={5} className={field} required />
                </div>
                {error && <p className="text-destructive text-sm">{error}</p>}
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-chocolate text-[hsl(var(--cream))] px-8 py-4 font-display font-semibold text-lg hover:bg-[hsl(var(--espresso))] active:scale-[0.98] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-caramel">
                  Submit
                </button>
                <p className="text-sm text-muted-foreground pt-2">For same-day product availability, please call us directly at <a href={`tel:${PHONE_TEL}`} className="text-caramel font-semibold">{PHONE}</a>.</p>
              </form>
            )}
          </Reveal>

          <Reveal>
            <div className="bg-card rounded-3xl p-7 border border-border/60">
              <h3 className="font-display font-bold text-xl text-chocolate">Happy Rolls</h3>
              <p className="mt-3 text-muted-foreground">{ADDRESS_LINE1}<br />{ADDRESS_LINE2}<br />{ADDRESS_CITY}</p>
              <div className="mt-5 space-y-3">
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 text-chocolate hover:text-caramel"><Phone className="h-5 w-5" /> {PHONE}</a>
                <a href="/visit" className="flex items-center gap-3 text-chocolate hover:text-caramel"><MapPin className="h-5 w-5" /> Get directions</a>
              </div>
              <h4 className="mt-7 font-display font-bold text-chocolate">Hours</h4>
              <ul className="mt-3 space-y-1 text-sm">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between border-b border-border/60 py-1.5">
                    <span className="text-chocolate">{h.day}</span><span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
