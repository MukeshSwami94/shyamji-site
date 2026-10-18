import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { CATEGORIES, PRODUCTS, type Category, type Product } from "@/data/products";
import { whatsappLink } from "@/lib/links";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-warm">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={`${p.name} from Shyam Ji Pede Wale`}
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-2xl font-semibold text-primary">{p.name}</h3>
          <span className="font-hindi text-lg text-saffron">{p.hindi}</span>
        </div>
        <p className="mt-2 flex-1 text-muted-foreground">{p.description}</p>
        <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Contact us for current price</p>
        <CtaButton href={whatsappLink(p.name)} variant="whatsapp" className="mt-4 w-full">
          <MessageCircle className="size-4" aria-hidden /> Order on WhatsApp
        </CtaButton>
      </div>
    </article>
  );
}

export function Specialities() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28">
      <SectionHeading eyebrow="Handmade" title="Our Specialities" subtitle="Traditional flavours made with care." />
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.filter((p) => p.featured).map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

export function SweetsCatalogue() {
  const [cat, setCat] = useState<Category>("All");
  const list = cat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
  return (
    <section id="sweets" className="bg-secondary/60 bg-jaali px-4 py-20 md:px-8 md:py-28">
      <SectionHeading eyebrow="Menu" title="Our Sweets & Namkeen" subtitle="Browse by category and enquire on WhatsApp." />
      <div role="tablist" aria-label="Sweet categories" className="mx-auto mb-10 flex max-w-4xl gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold transition-colors",
              cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary/50",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
        {list.length === 0 && (
          <p className="col-span-full rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
            More items in this category are available at the shop — ask us on WhatsApp.
          </p>
        )}
      </div>
    </section>
  );
}
