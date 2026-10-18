import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Leaf, CalendarDays, Sparkles, Users, Landmark, HandHeart } from "lucide-react";
import { GALLERY, GALLERY_CATEGORIES, type GalleryCategory } from "@/data/gallery";
import { BUSINESS } from "@/config/business";
import { whatsappLink, phoneLink, directionsLink } from "@/lib/links";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [cat, setCat] = useState<GalleryCategory>("All");
  const list = cat === "All" ? GALLERY : GALLERY.filter((g) => g.category === cat);
  return (
    <section id="gallery" className="px-4 py-20 md:px-8 md:py-28">
      <SectionHeading eyebrow="Gallery" title="A Glimpse of Our Shop" />
      <div className="mx-auto mb-8 flex max-w-3xl gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center">
        {GALLERY_CATEGORIES.map((c) => (
          <button
            key={c}
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold",
              cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/50",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mx-auto max-w-7xl columns-2 gap-3 md:columns-3 md:gap-5">
        {list.map((g) => (
          <figure key={g.alt} className="mb-3 break-inside-avoid overflow-hidden rounded-xl md:mb-5">
            <img src={g.src} alt={g.alt} width={g.width} height={g.height} loading="lazy" decoding="async" className="w-full transition-transform duration-700 hover:scale-105" />
          </figure>
        ))}
      </div>
    </section>
  );
}

const WHY = [
  { Icon: Leaf, t: "Traditional Taste", d: "Authentic flavours inspired by Rajasthan's sweet-making traditions." },
  { Icon: CalendarDays, t: "Since 1985", d: "Decades of experience serving customers." },
  { Icon: Sparkles, t: "Fresh Preparation", d: "Freshness and quality are our priorities." },
  { Icon: Users, t: "Local Favourite", d: "Serving customers from Khachariawas and surrounding areas." },
  { Icon: Landmark, t: "Perfect for Pilgrims", d: "Convenient for visitors travelling toward Khatu Shyam Ji." },
  { Icon: HandHeart, t: "Made with Care", d: "Every product is prepared with attention to taste and quality." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-earth bg-jaali px-4 py-20 md:px-8 md:py-28">
      <SectionHeading eyebrow="Why Us" title="Why Choose Us" light />
      <ul className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map(({ Icon, t, d }) => (
          <li key={t} className="rounded-2xl border border-gold/25 bg-maroon/60 p-7 text-maroon-foreground">
            <Icon className="mb-4 size-7 text-gold" aria-hidden />
            <h3 className="text-2xl font-semibold">{t}</h3>
            <p className="mt-2 text-maroon-foreground/75">{d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Contact() {
  const a = BUSINESS.address;
  return (
    <section id="contact" className="px-4 py-20 md:px-8 md:py-28">
      <SectionHeading eyebrow="Visit Us" title="Contact & Location" subtitle="Call, WhatsApp or drop by the shop." />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-5">
        <div className="rounded-2xl border border-gold/30 bg-card p-7 shadow-warm lg:col-span-2">
          <p className="font-hindi text-2xl text-saffron">{BUSINESS.nameHindi}</p>
          <h3 className="text-3xl font-semibold text-primary">{BUSINESS.name}</h3>
          <address className="mt-5 flex gap-3 not-italic text-muted-foreground">
            <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
            <span>
              {a.line1},<br />{a.locality},<br />{a.tehsil},<br />{a.district},<br />{a.state} – {a.postalCode}
            </span>
          </address>
          <div className="mt-6 rounded-xl bg-secondary p-4">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-primary"><Clock className="size-5" aria-hidden /> Opening Hours</h3>
            {BUSINESS.openingHours.length ? (
              <ul className="mt-2 text-sm">{BUSINESS.openingHours.map((h) => <li key={h.days}>{h.days}: {h.time}</li>)}</ul>
            ) : (
              <p className="mt-1 text-sm text-muted-foreground">Please call or WhatsApp us for today's opening hours.</p>
            )}
          </div>
          <div className="mt-6 grid gap-3">
            <CtaButton href={phoneLink()} external={false} variant="primary" size="lg"><Phone className="size-5" aria-hidden /> Call Now</CtaButton>
            <CtaButton href={whatsappLink()} variant="whatsapp" size="lg"><MessageCircle className="size-5" aria-hidden /> WhatsApp</CtaButton>
            <CtaButton href={directionsLink} variant="outline" size="lg"><MapPin className="size-5" aria-hidden /> Get Directions</CtaButton>
          </div>
        </div>
        <div className="min-h-80 overflow-hidden rounded-2xl border border-gold/30 shadow-warm lg:col-span-3">
          <iframe
            title="Map showing Shyam Ji Pede Wale, Khachariawas"
            src={BUSINESS.GOOGLE_MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-80 w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
