type Props = {
  year: string;
  title: string;
  organization: string;
  description: string;
};

export default function TimelineCard({
  year,
  title,
  organization,
  description,
}: Props) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-3 h-4 w-4 rounded-full bg-blue-500" />

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500">
        <p className="text-blue-400 text-sm uppercase tracking-widest">
          {year}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 font-medium text-slate-300">
          {organization}
        </p>

        <p className="mt-5 leading-7 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}