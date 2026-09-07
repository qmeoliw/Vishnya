import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { articles } from "../data/articles";

export default function Articles() {
  return (
    <div className="mx-auto max-w-[1350px] px-5 py-14 lg:px-8 lg:py-20">
      <span className="rounded-full bg-[#f9dfe2] px-3 py-1 text-[10px] text-[#b21745]">Статьи</span>
      <h1 className="mt-5 font-display text-5xl">Полезные материалы</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} to={`/articles/${article.slug}`} className="group overflow-hidden rounded-3xl bg-[#fff2f0]">
            <div className="h-52 bg-[#e9d8cd]" />
            <div className="p-6">
              <div className="text-[10px] text-[#bd1644]">{article.category} · {article.date}</div>
              <h2 className="mt-3 font-display text-2xl leading-tight">{article.title}</h2>
              <div className="mt-6 flex items-center gap-1 text-xs text-[#bd1644]">Читать <ArrowUpRight size={13}/></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}