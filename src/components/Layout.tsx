import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, MapPin } from "lucide-react";
import { BUSINESS } from "@/config/business";
import logo from "@/assets/sp-logo.png";
import { whatsappLink, phoneLink, directionsLink } from "@/lib/links";
import { CtaButton } from "./CtaButton";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#sweets", label: "Sweets" },
  { href: "#about", label: "About Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled || open ? "bg-maroon-gradient shadow-warm" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8" aria-label="Main">
        <a href="#home" className="flex items-center gap-3 text-maroon-foreground">
          <img
            src={logo}
            alt={`${BUSINESS.name} logo`}
            className="size-12 shrink-0 rounded-full border border-gold/50 object-cover object-top shadow-warm md:size-14"
          />
          <span className="flex flex-col leading-none">
            <span className="font-hindi text-xl text-gold md:text-2xl">{BUSINESS.nameHindi}</span>
            <span className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-maroon-foreground/80">
              {BUSINESS.name} · {BUSINESS.established}
            </span>
          </span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-sm font-medium text-maroon-foreground/90 transition-colors hover:text-gold">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <CtaButton href={whatsappLink()} variant="whatsapp" className="hidden sm:inline-flex">
            <MessageCircle className="size-4" aria-hidden /> Order on WhatsApp
          </CtaButton>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-maroon-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-gold/20 px-4 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-gold/10 py-3.5 font-display text-2xl text-maroon-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <CtaButton href={whatsappLink()} variant="whatsapp" size="lg" className="mt-5 w-full">
            <MessageCircle className="size-5" aria-hidden /> Order on WhatsApp
          </CtaButton>
        </div>
      )}
    </header>
  );
}

export function MobileActionBar() {
  const items = [
    { href: phoneLink(), label: "Call", Icon: Phone, ext: false },
    { href: whatsappLink(), label: "WhatsApp", Icon: MessageCircle, ext: true },
    { href: directionsLink, label: "Directions", Icon: MapPin, ext: true },
  ];
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 overflow-hidden rounded-2xl border border-gold/30 bg-maroon-gradient shadow-warm md:hidden"
    >
      {items.map(({ href, label, Icon, ext }, i) => (
        <a
          key={label}
          href={href}
          {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={cn(
            "flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-maroon-foreground",
            i === 1 && "bg-whatsapp text-whatsapp-foreground",
          )}
        >
          <Icon className="size-5" aria-hidden />
          {label}
        </a>
      ))}
    </nav>
  );
}

export function Footer() {
  const links = [
    ["#home", "Home"],
    ["#sweets", "Sweets"],
    ["#about", "About"],
    ["#gallery", "Gallery"],
    ["#contact", "Contact"],
  ];
  return (
    <footer className="bg-earth bg-jaali pb-28 pt-16 text-maroon-foreground md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-hindi text-3xl text-gold">{BUSINESS.nameHindi}</p>
          <p className="mt-1 font-display text-2xl">{BUSINESS.name}</p>
          <p className="mt-3 text-maroon-foreground/75">{BUSINESS.tagline}</p>
        </div>
        <div>
          <h3 className="mb-3 text-xl text-gold">Explore</h3>
          <ul className="grid grid-cols-2 gap-2">
            {links.map(([h, l]) => (
              <li key={h}>
                <a href={h} className="text-maroon-foreground/80 hover:text-gold">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-xl text-gold">Visit</h3>
          <p className="text-maroon-foreground/80">{BUSINESS.shortLocation}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <CtaButton href={whatsappLink()} variant="whatsapp">WhatsApp</CtaButton>
            <CtaButton href={phoneLink()} variant="outlineLight" external={false}>Call</CtaButton>
            <CtaButton href={directionsLink} variant="outlineLight">Google Maps</CtaButton>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-gold/15 px-4 pt-6 text-center text-sm text-maroon-foreground/60 md:px-8">
        © 2026 Shyam Ji Pede Wale. All rights reserved.
      </p>
    </footer>
  );
}
