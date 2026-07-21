import React from "react";
import {
  MapPin,
  Phone,
  Star,
  UtensilsCrossed,
} from "lucide-react";

import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import {
  Btn,
  Reveal,
  SectionTitle,
  Stars,
} from "@/components/Ui";

import {
  ADDRESS_CITY,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  GOOGLE_MAPS_URL,
  GOOGLE_REVIEWS_URL,
  IMG,
  MAP_EMBED,
  PHONE,
  PHONE_TEL,
  RATING,
  REVIEW_COUNT,
  REVIEWS,
  todayHours,
} from "@/lib/site";

import happyRollsLocation from "@/assets/happyrolls.png";

const POPULAR_ITEMS = [
  {
    name: "Rolled Ice Cream",
    description:
      "Freshly prepared rolled ice cream with creative flavours and toppings.",
    image: IMG.rolling,
    menuLink: "/menu#rolled",
  },
  {
    name: "Banana Pudding",
    description:
      "Creamy banana pudding layered with rich flavours and delicious toppings.",
    image: IMG.bananaPudding,
    menuLink: "/menu#pudding",
  },
  {
    name: "Liège Waffles",
    description:
      "Warm handcrafted waffles finished with sauces, fruit and your favourite toppings.",
    image: IMG.waffle,
    menuLink: "/menu#waffles",
  },
];

export default function HomePage() {
  const today = todayHours();

  return (
    <Layout>
      <Seo description="Visit Happy Rolls in Ottawa for fresh rolled ice cream, creamy banana pudding, warm Liège waffles, chocolate strawberry cups and unique desserts." />

      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center">
        <img
          src={IMG.hero}
          alt="Happy Rolls desserts"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--forest-deep))]/90 via-[hsl(var(--forest-deep))]/45 to-[hsl(var(--forest-deep))]/35" />

        <div className="relative mx-auto max-w-[90rem] w-full px-6 sm:px-8 pt-28 pb-20 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-xs uppercase tracking-luxe text-[hsl(var(--cream))] mb-6">
              Wellington West · Ottawa
            </p>

            <h1 className="font-display font-medium text-[hsl(var(--cream))] text-[2.6rem] leading-[1.06] sm:text-6xl md:text-7xl">
              Ottawa&apos;s Favourite
              <br className="hidden sm:block" /> Dessert
              Experience
            </h1>

            <p className="mt-7 text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
              Fresh rolled ice cream, handcrafted waffles,
              creamy banana pudding, specialty drinks and
              unforgettable desserts made fresh every day.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Btn
                to="/menu"
                variant="caramel"
                size="lg"
              >
                <UtensilsCrossed
                  className="h-5 w-5"
                  strokeWidth={1.6}
                />
                View Menu
              </Btn>

              <Btn
                to="/visit"
                variant="outline"
                size="lg"
                className="!border-white/70 !text-white hover:!bg-white hover:!text-forest"
              >
                <MapPin
                  className="h-5 w-5"
                  strokeWidth={1.6}
                />
                Visit Us
              </Btn>

              <Btn
                href={`tel:${PHONE_TEL}`}
                variant="outline"
                size="lg"
                className="!border-white/70 !text-white hover:!bg-white hover:!text-forest"
              >
                <Phone
                  className="h-5 w-5"
                  strokeWidth={1.6}
                />
                Call Now
              </Btn>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-[10px] uppercase tracking-luxe animate-pulse">
          Scroll
        </div>
      </section>

      {/* Google rating */}
<div className="bg-forest text-[hsl(var(--cream))]">
  <div className="mx-auto max-w-[90rem] px-6 py-5 md:py-6 text-center">
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
      <div className="flex items-center gap-2">
       <span
  className="text-2xl leading-none"
  style={{ color: "#F6C453" }}
  aria-hidden="true"
>
  ★
</span>

        <span className="font-display text-2xl leading-none">
          {RATING}
        </span>
      </div>

      <span className="h-5 w-px bg-[hsl(var(--cream))]/30" />

      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noreferrer"
        className="font-sans text-sm font-semibold tracking-wide hover:text-caramel transition-colors"
      >
        {REVIEW_COUNT} Google Reviews
      </a>
    </div>

    <p className="mt-3 text-sm tracking-wide text-[hsl(var(--cream))]/75">
      One of Ottawa&apos;s highest-rated dessert destinations
    </p>
  </div>
</div>

      {/* Moving product strip */}
      <div className="bg-beige text-forest py-3 overflow-hidden border-y border-border">
        <div className="flex whitespace-nowrap animate-marquee font-display text-base">
          {Array.from({ length: 2 }).map((_, row) => (
            <span
              key={row}
              className="flex"
            >
              {[
                "Rolled Ice Cream",
                "Banana Pudding",
                "Liège Waffles",
                "Chocolate Strawberries",
                "Pistachio Kunafa",
                "Dubai Chocolate",
                "Specialty Lattes",
              ].map((item) => (
                <span
                  key={item}
                  className="mx-6 inline-flex items-center gap-6"
                >
                  {item}
                  <span className="text-forest/40">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Popular products */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="font-sans text-xs uppercase tracking-luxe text-forest mb-4">
              Popular at Happy Rolls
            </p>

            <h2 className="font-display text-4xl md:text-5xl text-chocolate leading-[1.1]">
              Handcrafted, Fresh, Unforgettable
            </h2>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              A few of the desserts our customers keep
              coming back for.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {POPULAR_ITEMS.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 70}
              >
                <article className="group h-full overflow-hidden rounded-3xl bg-card border border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold text-chocolate">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Btn
              to="/menu"
              variant="primary"
              size="lg"
            >
              <UtensilsCrossed className="h-5 w-5" />
              View Full Menu
            </Btn>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[90rem] px-6">
          <Reveal>
            <SectionTitle
              eyebrow="Kind words"
              center
              className="max-w-2xl"
            >
              Loved by Ottawa Dessert Fans
            </SectionTitle>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, index) => (
              <Reveal
                key={index}
                delay={index * 50}
              >
                <blockquote className="bg-card rounded-3xl p-7 h-full border border-border/60 flex flex-col">
                  <Stars className="h-4 w-4" />

                  <p className="mt-4 text-chocolate leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <footer className="mt-4 font-display font-semibold text-caramel text-sm">
                    {review.theme} · Google review
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Btn
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="lg"
            >
              Read More Google Reviews
            </Btn>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 md:py-28 bg-[hsl(var(--muted))]">
        <div className="mx-auto max-w-[90rem] px-6 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <SectionTitle eyebrow="Find us">
              Visit Happy Rolls
            </SectionTitle>

            <p className="mt-5 text-lg text-chocolate font-display font-medium">
              {ADDRESS_LINE1}
              <br />

              <span className="text-muted-foreground font-normal">
                {ADDRESS_LINE2}
              </span>

              <br />
              {ADDRESS_CITY}
            </p>

            <p className="mt-3 text-muted-foreground">
              Phone:{" "}
              <a
                href={`tel:${PHONE_TEL}`}
                className="text-caramel font-semibold"
              >
                {PHONE}
              </a>
            </p>

            <div className="mt-4 rounded-2xl bg-pistachio/20 p-4 text-sm text-chocolate">
              Today ({today.day}):{" "}
              <span className="font-semibold">
                {today.time}
              </span>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Happy Rolls can be slightly tucked away—look
              for the entrance on the Hamilton Avenue North
              side.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Btn
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                variant="primary"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </Btn>

              <Btn
                href={`tel:${PHONE_TEL}`}
                variant="caramel"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Btn>
            </div>
          </Reveal>

          <Reveal className="space-y-4">
            <iframe
              title="Happy Rolls location map"
              src={MAP_EMBED}
              className="w-full h-64 rounded-3xl border border-border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <img
               src={happyRollsLocation}
               alt="Happy Rolls storefront in Ottawa"
               loading="lazy"
               className="w-full h-48 object-cover rounded-3xl"
/>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}