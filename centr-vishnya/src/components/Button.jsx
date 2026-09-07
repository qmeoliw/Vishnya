import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({ children, to = "/contacts", variant = "primary" }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs transition";
  const styles = variant === "primary"
    ? "bg-[#bd1644] text-white hover:bg-[#9f123a]"
    : "border border-[#bd1644] text-[#8f173b] hover:bg-[#f9e0e2]";
  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children} <ArrowUpRight size={14} />
    </Link>
  );
}