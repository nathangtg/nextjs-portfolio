export default function NameHeader({
  name,
  role,
  description,
}: {
  name: string;
  role: string;
  description: string;
}) {
  return (
    <div className="w-full py-20 ">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <a href="/">{name}</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        {role}
      </h2>
      <p className="mt-4 max-w-xs leading-normal text-slate-300">
        {description}
      </p>
    </div>
  );
}
