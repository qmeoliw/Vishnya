import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Услуги", "/services"],
  ["О центре", "/about"],
  ["Специалисты", "/about#team"],
  ["Статьи", "/articles"],
  ["Отзывы", "/reviews"],
  ["Контакты", "/contacts"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 border-b border-[#eadbd8]/70 bg-[#fbf5f3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1350px] items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="relative h-10 w-8">
            <img src="/images/icons.png" alt="Центр вишни" />
          </div>
          <div>
            <div className="font-display text-[17px] leading-none">Вишня</div>
            <div className="mt-1 text-[7px] uppercase tracking-[0.14em] text-[#857878]">центр комплексной помощи</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, to]) => (
            <NavLink
              key={label}
              to={to}
              className="text-[12px] text-[#3e3537] transition hover:text-[#b21745]"
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contacts"
          className="hidden items-center gap-2 rounded-full bg-[#bd1644] px-5 py-3 text-[12px] text-white transition hover:bg-[#9f123a] sm:flex"
        >
          Записаться <ArrowUpRight size={14} />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 lg:hidden"
          aria-label="Меню"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#eadbd8] bg-[#fbf5f3] px-5 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col">
            {links.map(([label, to]) => (
              <Link
                key={label}
                to={to}
                onClick={() => setOpen(false)}
                className="border-b border-[#eadbd8] py-4 text-sm"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contacts"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-[#bd1644] px-5 py-3 text-center text-sm text-white"
            >
              Записаться
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}