export default function TechBox({ name }: { name: string }) {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-blue-500/10 px-5 py-2 text-xs font-medium leading-5 text-blue-400">
        {name}
      </div>
    </li>
  );
}
