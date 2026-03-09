import type { FaqItem } from "@/data/faqs";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="card-surface group p-6" open={false}>
          <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-surface marker:hidden">
            {item.question}
          </summary>
          <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
