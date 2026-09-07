import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  return (
    <div className="mx-auto max-w-[1350px] px-5 py-14 lg:px-8 lg:py-20">
      <span className="rounded-full bg-[#f9dfe2] px-3 py-1 text-[10px] text-[#b21745]">Услуги</span>
      <h1 className="mt-5 font-display text-5xl">Направления помощи</h1>
      <p className="mt-5 max-w-2xl text-sm leading-6 text-[#6b6162]">
        Индивидуальный маршрут поддержки для детей, подростков, взрослых и семей.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Link key={service.slug} to={`/services/${service.slug}`} className="group rounded-3xl bg-[#fff2f0] p-7 transition hover:-translate-y-1">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fde0e4] text-[#bd1644]">{service.icon}</div>
              <ArrowUpRight className="text-[#bd1644]" />
            </div>
            <h2 className="mt-8 font-display text-2xl">{service.title}</h2>
            <p className="mt-3 text-xs leading-5 text-[#746a6b]">{service.short}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}