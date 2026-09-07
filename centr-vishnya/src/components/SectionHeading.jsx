import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SectionHeading({ title, linkText, to }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-5">
      <h2 className="font-display text-3xl leading-tight tracking-[-0.02em] sm:text-4xl">{title}</h2>
      {linkText && (
        <Link to={to} className="hidden items-center gap-1 text-xs text-[#b21745] sm:flex">
          {linkText} <ArrowUpRight size={13} />
        </Link>
      )}
    </div>
  );
}