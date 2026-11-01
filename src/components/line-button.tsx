import Link from "next/link";

// Ray's public LINE add-friend link (ID provided by Ray, 2026-10-26).
const LINE_URL = "https://line.me/ti/p/~duswaaaa";

export function LineButton() {
  return (
    <Link
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ray on LINE"
      title="Chat with Ray on LINE"
      className="fixed bottom-[10.5rem] right-4 z-40 flex size-12 items-center justify-center rounded-full bg-[#06C755] shadow-xl transition-transform duration-200 hover:-translate-y-0.5 sm:bottom-24 sm:right-6"
    >
      <span className="select-none text-[10px] font-bold tracking-wider text-white">
        LINE
      </span>
    </Link>
  );
}
