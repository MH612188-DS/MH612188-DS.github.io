type Props = {
  value: string;
  label: string;
};

export default function MetricCard({
  value,
  label,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-8 text-center">

      <h3 className="text-5xl font-black text-blue-400">
        {value}
      </h3>

      <p className="mt-3 text-slate-400">
        {label}
      </p>

    </div>
  );
}