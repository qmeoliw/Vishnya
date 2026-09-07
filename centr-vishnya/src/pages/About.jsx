import { Heart, ShieldCheck, Route, Users } from "lucide-react";
import Button from "../components/Button";

const team = [
  ["Психолог", "Куляева Нина", "Психолог, педагог-психолог, клинический психолог, аналитический психолог, психолог диагност"],
  ["Нейропсихолог", "Шаройко Полина", "Клинический психолог, нейропсихолог"],
  ["Нейропсихолог", "Мозжухина Ольга", "Психолог, клинический психолог, нейропсихолог"],
];

export default function About() {
  return (
    <div className="mx-auto max-w-[1350px] px-5 py-14 lg:px-8 lg:py-20">
      <span className="rounded-full bg-[#f9dfe2] px-3 py-1 text-[10px] text-[#b21745]">О центре</span>
      <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">С заботой о гармоничном развитии</h1>
      <p className="mt-6 max-w-2xl text-sm leading-6 text-[#6b6162]">
        «Вишня» — команда специалистов, которые верят в потенциал каждого человека.
        Мы помогаем справляться с трудностями, развивать сильные стороны и находить ресурсы для счастливой жизни.
      </p>
      <div className="mt-8"><Button>Записаться на приём</Button></div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          [Heart, "Бережность", "Безопасное пространство и уважение к индивидуальному темпу."],
          [ShieldCheck, "Конфиденциальность", "Внимательное отношение к личной информации и границам."],
          [Route, "Понятный маршрут", "После диагностики — реалистичный план дальнейшей помощи."]
        ].map(([Icon, title, text]) => (
          <div key={title} className="rounded-2xl bg-[#fff2f0] p-7">
            <Icon className="text-[#bd1644]" />
            <h2 className="mt-6 font-display text-2xl">{title}</h2>
            <p className="mt-3 text-xs leading-5 text-[#746a6b]">{text}</p>
          </div>
        ))}
      </div>

      <section className="mt-20" id="team">
        <h2 className="font-display text-4xl">Наши специалисты</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {team.map(([role, name, desc]) => (
            <article key={name} className="overflow-hidden rounded-2xl bg-[#fff2f0]">
              <div className="h-64 bg-[#ded5cf]" />
              <div className="p-6">
                <div className="text-[10px] text-[#756a6b]">{role}</div>
                <h3 className="mt-2 font-display text-2xl">{name}</h3>
                <p className="mt-4 text-xs leading-5 text-[#746a6b]">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}