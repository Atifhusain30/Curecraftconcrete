export default function SectionHeading({
  eyebrow,
  title,
  lead,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${light ? "!text-white/60" : ""}`}>{eyebrow}</p>
      <span className={`level-line mt-3 ${center ? "mx-auto" : ""} ${light ? "!bg-white" : ""}`} aria-hidden />
      <h2 className={`display-xl mt-5 text-3xl sm:text-4xl ${light ? "text-white" : "text-iron"}`}>{title}</h2>
      {lead && <p className={`mt-4 text-[16.5px] leading-relaxed ${light ? "text-white/70" : "text-steel"}`}>{lead}</p>}
    </div>
  );
}
