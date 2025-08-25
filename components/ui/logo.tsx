import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Kadim Dostum">
      <span className="text-2xl font-bold text-white">
        <span className="text-indigo-400">Kadim</span> Dostum
      </span>
    </Link>
  );
}
