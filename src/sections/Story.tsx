import { MessageCircle, MapPin, Check } from "lucide-react";
import peda from "@/assets/peda.jpg";
import temple from "@/assets/temple-street.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import { whatsappLink, directionsLink } from "@/lib/links";
import { CtaButton } from "@/components/CtaButton";

export function PedaFeature() {
  return (
    <section aria-labelledby="peda-title" className="bg-maroon-gradient px-4 py-20 text-maroon-foreground md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/40" aria-hidden />
          <img src={peda} alt="Close-up of traditional peda with pistachio" width={1024} height={1024} loading="lazy" className="relative aspect-square w-full rounded-[1.6rem] object-cover" />
        </div>
        <div>
          <p className="divider-ornament mb-4 text-xs font-semibold uppercase tracking-[0.3em]">Signature</p>
          <h2 id="peda-title" className="text-4xl font-semibold md:text-6xl">Our Traditional <span className="text-gold-gradient italic">Peda</span></h2>
          <p className="mt-6 text-lg text-maroon-foreground/85">
            Made with traditional methods and crafted for customers who value authentic taste.
          </p>
          <p className="mt-6 border-l-2 border-gold pl-4 font-display text-2xl italic text-gold">
            A taste associated with Rajasthan's traditional sweet culture.
          </p>
          <CtaButton href={whatsappLink("Peda")} variant="whatsapp" size="lg" className="mt-8">
            <MessageCircle className="size-5" aria-hidden /> Order Peda on WhatsApp
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

export function KhatuShyam() {
  return (
    <section aria-labelledby="khatu-title" className="relative isolate overflow-hidden px-4 py-24 md:px-8 md:py-32">
      <img src={temple} alt="Temple street in Rajasthan at golden hour" width={1280} height={864} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl text-maroon-foreground">
          <h2 id="khatu-title" className="text-4xl font-semibold md:text-6xl">Visiting Khatu Shyam Ji?</h2>
          <p className="mt-6 text-lg text-maroon-foreground/90">
            Planning a visit to Khatu Shyam Ji? Stop by Shyam Ji Pede Wale at Khachariawas and take home traditional sweets and namkeen for your family and loved ones.
          </p>
          <p className="mt-4 text-gold">Perfect for pilgrims and visitors travelling through the region — about 20 km from Khatu Shyam Ji.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href={directionsLink} variant="saffron" size="lg"><MapPin className="size-5" aria-hidden /> Get Directions</CtaButton>
            <CtaButton href={whatsappLink()} variant="whatsapp" size="lg"><MessageCircle className="size-5" aria-hidden /> Order on WhatsApp</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const POINTS = ["Established in 1985", "Traditional recipes", "Fresh preparation", "Local Rajasthan heritage", "Customer-focused service"];

export function About() {
  return (
    <section id="about" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <img src={shopInterior} alt="Sweets being prepared in a traditional brass kadhai" width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-warm" />
        <div>
          <p className="divider-ornament mb-4 text-xs font-semibold uppercase tracking-[0.3em]">About Us</p>
          <h2 className="text-4xl font-semibold text-primary md:text-5xl">Our Story</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Shyam Ji Pede Wale has been serving traditional sweets since 1985. Our focus is simple — maintain the taste and quality of traditional Indian sweets while serving every customer with care.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2"><Check className="size-4 text-saffron" aria-hidden />{p}</li>
            ))}
          </ul>
          <ol className="mt-8 flex items-center gap-4" aria-label="Timeline">
            <li className="rounded-xl bg-primary px-4 py-3 text-primary-foreground">
              <span className="block font-display text-3xl">1985</span><span className="text-sm">The beginning</span>
            </li>
            <li aria-hidden className="h-px flex-1 bg-gold" />
            <li className="rounded-xl border border-gold px-4 py-3">
              <span className="block font-display text-3xl text-primary">Today</span><span className="text-sm text-muted-foreground">Decades of traditional taste</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
