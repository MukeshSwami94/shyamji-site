import { BUSINESS } from "@/config/business";

export function productMessage(product: string) {
  return `Hello Shyam Ji Pede Wale, I am interested in ${product}. Please share the current price and availability.`;
}

export function whatsappLink(product?: string, number: string = BUSINESS.WHATSAPP_NUMBER) {
  const text = product ? productMessage(product) : BUSINESS.messages.general;
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export function phoneLink(number: string = BUSINESS.PHONE_NUMBER) {
  return `tel:${number.replace(/[^\d+]/g, "")}`;
}

export const directionsLink = BUSINESS.GOOGLE_MAPS_URL;
