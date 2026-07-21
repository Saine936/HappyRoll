import React from "react";
import {
  CalendarDays,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Btn, Reveal } from "@/components/Ui";
import birthdayCakeImage from "@/assets/BirthdayCake.png";

import {
  MENU,
  WAFFLE_TOPPINGS,
  PHONE,
  PHONE_TEL,
  GOOGLE_MAPS_URL,
} from "@/lib/site";

export default function MenuPage() {
  const currentMonth = new Date().getMonth();
  const isJuly = currentMonth === 6;
  const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
    <Layout>
      <Seo
        title="Menu | Happy Rolls Ottawa — Rolled Ice Cream, Banana Pudding & Waffles"
        description="Explore the Happy Rolls menu, including Liège waffles, banana pudding, rolled ice cream and chocolate strawberry cups in Ottawa."
      />

      <section className="pt-28 md:pt-36 pb-10 bg-chocolate text-[hsl(var(--cream))]">
        <div className="mx-auto max-w-[72rem] px-6 text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl">
            The Happy Rolls Menu
          </h1>

          <p className="mt-4 text-[hsl(var(--cream))]/80 max-w-2xl mx-auto text-sm md:text-base">
            Explore our freshly made desserts, specialty
            flavours and customer favourites.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
  {isJuly && (
    <button
      type="button"
      onClick={() => scrollToSection("featured")}
      className="rounded-full bg-strawberry px-5 py-2.5 font-display font-semibold transition-all hover:scale-105"
    >
      July Feature
    </button>
  )}

              {MENU.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  scrollToSection(category.id)
                }
                className="rounded-full bg-[hsl(var(--cream))]/10 hover:bg-strawberry px-5 py-2.5 font-display font-semibold transition-colors"
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {isJuly && (
        <section
          id="featured"
          className="scroll-mt-24 py-16 md:py-24 bg-strawberry/10"
        >
          <div className="mx-auto max-w-[72rem] px-6">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] bg-card border border-strawberry/30 shadow-xl">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-[380px] md:h-[500px] overflow-hidden">
                    <img
                      src={birthdayCakeImage}
                      alt="Birthday Cake Banana Pudding"
                      className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
                    />

                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-strawberry px-4 py-2 text-sm font-display font-semibold text-white shadow-md">
                      <Sparkles className="h-4 w-4" />
                      July Feature
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-strawberry/15 px-4 py-2 text-sm font-display font-semibold text-strawberry">
                      <CalendarDays className="h-4 w-4" />
                      Available during July only
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-luxe text-caramel">
                      Limited-time banana pudding
                    </p>

                    <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl text-chocolate">
                      Birthday Cake Banana Pudding
                    </h2>

                    <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground">
                      A festive birthday-cake twist on the
                      Happy Rolls banana pudding, available
                      exclusively throughout July.
                    </p>

                    <div className="mt-7 flex items-center justify-between gap-4">
                      <p className="font-display font-semibold text-strawberry">
                        Get it before it’s gone!
                      </p>

                      <span className="font-display text-3xl font-bold text-chocolate">
                        $8
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {MENU.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-24 py-16 md:py-24 ${
            categoryIndex % 2
              ? "bg-[hsl(var(--muted))]"
              : ""
          }`}
        >
          <div className="mx-auto max-w-[72rem] px-6">
            <Reveal className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-center mb-12">
              <img
                src={category.img}
                alt={category.title}
                loading="lazy"
                className="rounded-3xl object-cover aspect-[4/3] w-full shadow-lg"
              />

              <div>
                <h2 className="font-display font-bold text-chocolate text-3xl md:text-5xl">
                  {category.title}
                </h2>

                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                  {category.intro}
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-card rounded-2xl p-6 border border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display font-bold text-lg text-chocolate">
                      {item.name}
                    </h3>

                    <span className="font-display font-bold text-caramel whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>

                  {item.flavours && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {item.flavours.map((flavour) => (
                        <li
                          key={flavour}
                          className="rounded-full bg-pistachio/20 px-3 py-1 text-xs font-display font-medium text-chocolate"
                        >
                          {flavour}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {category.id === "waffles" && (
              <div className="mt-8 bg-card rounded-2xl p-6 border border-dashed border-caramel/60">
                <h3 className="font-display font-bold text-chocolate text-xl">
                  Extra Waffle Toppings
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {WAFFLE_TOPPINGS.map((topping) => (
                    <li
                      key={topping}
                      className="rounded-full bg-[hsl(var(--muted))] px-4 py-2 text-sm font-display font-medium text-chocolate"
                    >
                      {topping}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="py-14 bg-espresso text-[hsl(var(--cream))]/85">
        <div className="mx-auto max-w-[72rem] px-6 space-y-4 text-sm text-center">
          <p>
            Prices, flavours and product availability are
            subject to change. Please contact Happy Rolls
            directly for current availability.
          </p>

          <p>
            Please inform our team of any allergies before
            ordering. Products may contain or come into
            contact with dairy, nuts, gluten, eggs, soy and
            other allergens.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Btn
              href={`tel:${PHONE_TEL}`}
              variant="strawberry"
            >
              <Phone className="h-5 w-5" />
              Call {PHONE}
            </Btn>

            <Btn
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              variant="caramel"
            >
              <MapPin className="h-5 w-5" />
              Get Directions
            </Btn>
          </div>
        </div>
      </section>
    </Layout>
  );
}