import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS } from "@/config/business";
import { Header, Footer, MobileActionBar } from "@/components/Layout";
import { Hero, TrustCards } from "@/sections/Hero";
import { Specialities, SweetsCatalogue } from "@/sections/Products";
import { PedaFeature, KhatuShyam, About } from "@/sections/Story";
import { Gallery, WhyUs, Contact } from "@/sections/Info";

const TITLE = "Shyam Ji Pede Wale | Peda & Sweet Shop in Khachariawas near Khatu Shyam Ji";
const DESC =
  "Traditional Rajasthani sweets, peda and namkeen since 1985. Sweet shop in Khachariawas, Dantaramgarh, Sikar — about 20 km from Khatu Shyam Ji. Order on WhatsApp.";
const KEYWORDS = [
  "Shyam Ji Pede Wale",
  "श्याम जी पेड़े वाले",
  "peda shop Khachariawas",
  "sweet shop Khachariawas",
  "Khatu Shyam Ji peda",
  "peda near Khatu Shyam Ji",
  "sweet shop near Khatu Shyam",
  "Dantaramgarh sweets",
  "Sikar sweet shop",
  "Rajasthani sweets",
  "milk peda",
  "besan barfi",
  "milk cake",
  "laddu",
  "namkeen Sikar",
  "खाचरियावास पेड़ा",
  "खाटू श्याम पेड़ा",
  "मिठाई की दुकान सीकर",
].join(", ");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: BUSINESS.name,
  alternateName: BUSINESS.nameHindi,
  description: DESC,
  foundingDate: String(BUSINESS.established),
  url: BUSINESS.SITE_URL,
  telephone: BUSINESS.PHONE_NUMBER,
  servesCuisine: "Indian sweets",
  keywords: KEYWORDS,
  areaServed: ["Khachariawas", "Dantaramgarh", "Khatu Shyam Ji", "Sikar", "Rajasthan"],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.locality}`,
    addressLocality: BUSINESS.address.tehsil,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.MAP.lat,
    longitude: BUSINESS.MAP.lng,
  },
  hasMap: BUSINESS.GOOGLE_MAPS_URL,
  sameAs: [BUSINESS.GOOGLE_MAPS_URL],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "IN-RJ" },
      { name: "geo.placename", content: "Khachariawas, Dantaramgarh, Sikar" },
      { name: "geo.position", content: `${BUSINESS.MAP.lat};${BUSINESS.MAP.lng}` },
      { name: "ICBM", content: `${BUSINESS.MAP.lat}, ${BUSINESS.MAP.lng}` },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: BUSINESS.name },
      { property: "og:url", content: BUSINESS.SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: BUSINESS.SITE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustCards />
        <Specialities />
        <PedaFeature />
        <KhatuShyam />
        <About />
        <SweetsCatalogue />
        <Gallery />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
