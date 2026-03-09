type PlaceholderImageProps = {
  label: string;
  detail?: string;
  className?: string;
};

export function PlaceholderImage({ label, detail, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-purple-100 bg-gradient-to-br from-haze via-white to-slate-100 ${className}`}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,184,255,0.32),transparent_34%)]" />
      <div className="relative flex h-full min-h-[280px] flex-col justify-between p-8">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-purple-700">Placeholder Visual</span>
        <div>
          <p className="text-2xl font-semibold tracking-tight text-surface">{label}</p>
          {detail ? <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">{detail}</p> : null}
        </div>
      </div>
    </div>
  );
}
