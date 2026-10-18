import { MapPin, MessageCircle, Clock, HandHeart, Sparkles, Landmark } from "lucide-react";
import hero from "@/assets/hero-sweets.jpg";
import { BUSINESS } from "@/config/business";
import { whatsappLink, directionsLink } from "@/lib/links";
import { CtaButton } from "@/components/CtaButton";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-earth md:items-center">
      <img
        src={hero}
        alt="Brass thali of traditional Rajasthani sweets — peda, laddu and barfi with marigolds"
        width={1600}
        height={1008}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-earth to-transparent md:hidden" />
      <div className="mx-auto w-full max-w-7xl px-4 pb-28 pt-28 md:px-8 md:pb-16">
        <div className="max-w-2xl animate-rise text-maroon-foreground">
          <p className="divider-ornament mb-5 text-xs font-semibold uppercase tracking-[0.3em]">Since {BUSINESS.established}</p>
          <h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Authentic Rajasthan Sweets <span className="text-gold-gradient italic">Since 1985</span>
          </h1>
          <p className="mt-6 font-hindi text-3xl text-gold md:text-4xl">{BUSINESS.nameHindi}</p>
          <p className="mt-1 font-display text-2xl md:text-3xl">{BUSINESS.name}</p>
          <p className="mt-5 max-w-xl text-lg text-maroon-foreground/85">
            Traditional handmade sweets and namkeen made with authentic taste and decades of experience.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-maroon-foreground/80">
            <MapPin className="size-4 shrink-0 text-gold" aria-hidden />
            Near Khatu Shyam Ji | Khachariawas, Sikar, Rajasthan
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href={whatsappLink()} variant="whatsapp" size="lg">
              <MessageCircle className="size-5" aria-hidden /> Order on WhatsApp
            </CtaButton>
            <CtaButton href={directionsLink} variant="outlineLight" size="lg">
              <MapPin className="size-5" aria-hidden /> Get Directions
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const TRUST = [
  { Icon: Clock, title: "Since 1985", text: "Decades of traditional taste" },
  { Icon: HandHeart, title: "Handmade", text: "Prepared with care" },
  { Icon: Sparkles, title: "Fresh Sweets", text: "Made for quality and taste" },
  { Icon: Landmark, title: "Near Khatu Shyam Ji", text: "Convenient for pilgrims and visitors" },
];

export function TrustCards() {
  return (
    <section aria-label="Why customers trust us" className="relative z-10 -mt-10 px-4 md:-mt-14 md:px-8">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {TRUST.map(({ Icon, title, text }) => (
          <li key={title} className="rounded-2xl border border-gold/30 bg-card p-5 text-center shadow-warm md:p-6">
            <span className="mx-auto mb-3 flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
              <Icon className="size-5" aria-hidden />
            </span>
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
