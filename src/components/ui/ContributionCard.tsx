type Props = {
  title: string;
  value: string;
  description: string;
};

export default function ContributionCard({
  title,
  value,
  description,
}: Props) {
  return (
    <div
      className="
        h-full
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
      "
    >
      <p className="text-sm uppercase tracking-widest text-blue-400">
        {title}
      </p>

      <h3 className="mt-4 text-2xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-5 leading-7 text-slate-400">
        {description}
      </p>
    </div>
  );
}