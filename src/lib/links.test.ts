import { describe, expect, it } from "vitest";
import { whatsappLink, phoneLink, directionsLink } from "./links";
import { BUSINESS } from "@/config/business";

describe("contact links", () => {
  it("uses the shop's real number", () => {
    expect(BUSINESS.WHATSAPP_NUMBER).toBe("918239692499");
    expect(phoneLink()).toBe("tel:+918239692499");
  });
  it("builds general WhatsApp enquiry", () => {
    const url = whatsappLink(undefined, "91 98765-43210");
    expect(url.startsWith("https://wa.me/919876543210?text=")).toBe(true);
    expect(decodeURIComponent(url.split("text=")[1] ?? "")).toBe(
      "Hello Shyam Ji Pede Wale, I would like to enquire about your sweets.",
    );
  });
  it("builds product WhatsApp enquiry", () => {
    const url = whatsappLink("Peda", "919876543210");
    expect(decodeURIComponent(url.split("text=")[1] ?? "")).toBe(
      "Hello Shyam Ji Pede Wale, I am interested in Peda. Please share the current price and availability.",
    );
  });
  it("builds tel link", () => {
    expect(phoneLink("+91 98765 43210")).toBe("tel:+919876543210");
  });
  it("directions link opens the shop's own Google Maps listing", () => {
    expect(directionsLink.startsWith("https://www.google.com/maps/dir/")).toBe(true);
    expect(directionsLink).toContain("0x396c8b1bb5530799:0xd2077224dddfb0dc");
    expect(directionsLink).toContain("Khachariawas");
    expect(directionsLink).toContain("Rajasthan+332710");
  });
});
