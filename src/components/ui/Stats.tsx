type Props = {
  value: string;
  label: string;
};

export default function Stats({ value, label }: Props) {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-blue-400">
        {value}
      </h3>

      <p className="text-slate-400 mt-2">
        {label}
      </p>
    </div>
  );
}