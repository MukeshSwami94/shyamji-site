/**
 * ─────────────────────────────────────────────────────────────
 *  BUSINESS CONFIGURATION — edit everything about the shop here.
 *  Every component reads from this file; nothing is duplicated.
 * ─────────────────────────────────────────────────────────────
 */
export const BUSINESS = {
  name: "Shyam Ji Pede Wale",
  nameHindi: "श्याम जी पेड़े वाले",
  established: 1985,
  tagline: "Traditional sweets since 1985.",

  /** WhatsApp number in international format, digits only (e.g. "919876543210"). */
  WHATSAPP_NUMBER: "918239692499",
  /** Phone number for the "Call" buttons, e.g. "+919876543210". */
  PHONE_NUMBER: "+918239692499",

  address: {
    line1: "Front of Gopinath Ji Mandir, near Jain Bhawan",
    locality: "Khachariawas",
    tehsil: "Dantaramgarh",
    district: "Sikar",
    state: "Rajasthan",
    postalCode: "332710",
    country: "IN",
  },
  shortLocation: "Khachariawas, Dantaramgarh, Sikar, Rajasthan 332710",
  nearby: "About 20 km from Khatu Shyam Ji",

  /** Exact pin of the shop's Google Maps listing ("Shyam Ji PedeWale"). */
  MAP: {
    lat: 27.2300964,
    lng: 75.2968021,
  },
  /** Directions link, as taken from the shop's Google Maps listing. */
  GOOGLE_MAPS_URL:
    "https://www.google.com/maps/dir//Shyam+Ji+PedeWale,+Front+of+Gopinath+Ji+Mandir,+near+Jain+Bhawan,+Khachariawas,+Rajasthan+332710/@27.2244366,75.2279545,13z/data=!4m11!1m2!29m1!1b1!4m7!1m0!1m5!1m1!1s0x396c8b1bb5530799:0xd2077224dddfb0dc!2m2!1d75.2968021!2d27.2300964",
  /** Embedded map, as taken from the shop's Google Maps listing. */
  GOOGLE_MAPS_EMBED_URL:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.8547372463846!2d75.29580761111111!3d27.230074399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c8b1bb5530799%3A0xd2077224dddfb0dc!2sShyam%20Ji%20PedeWale!5e0!3m2!1sen!2sin!4v1715239165",

  /** Leave empty to show the "call or WhatsApp us" message. */
  openingHours: [] as { days: string; time: string }[],

  social: {
    instagram: "",
    facebook: "",
  },

  /** Your live website address (used for canonical URL & SEO). */
  SITE_URL: "https://www.shyamjipedewale.com",

  messages: {
    general: "Hello Shyam Ji Pede Wale, I would like to enquire about your sweets.",
  },
} as const;
