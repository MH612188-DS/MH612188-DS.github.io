type Props = {
  title: string;
  description: string;
};

export default function PipelineNode({
  title,
  description,
}: Props) {
  return (
    <div className="relative">

      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">

        <h3 className="text-xl font-bold text-blue-400">
          {title}
        </h3>

        <p className="mt-4 text-slate-400 leading-7">
          {description}
        </p>

      </div>

    </div>
  );
}