export default function SpecChips({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Build specifications">
      {items.map((item) => (
        <li
          key={item}
          className="rounded border border-line bg-slab px-2 py-0.5 font-display text-[11.5px] font-semibold uppercase tracking-[0.05em] text-graphite"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
