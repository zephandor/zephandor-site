export type FaqItem = {
  question: string;
  answer: string;
};

import type { Messages } from "@/lib/i18n";

export function getFaqs(messages: Messages): FaqItem[] {
  return messages.faqs;
}
