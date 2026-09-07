import { Quote } from "lucide-react";
import Button from "../components/Button";

export default function Reviews() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-14 lg:py-20">
      <span className="rounded-full bg-[#f9dfe2] px-3 py-1 text-[10px] text-[#b21745]">Отзывы</span>
      <h1 className="mt-5 font-display text-5xl">Отзывы наших клиентов</h1>
      <div className="mt-10 space-y-4">
        {[["Анна С.", "Мама, г. Москва", "Очень благодарны специалистам центра «Вишня»! Ребёнок стал увереннее, появились новые навыки, а мы получили важные рекомендации."],
          ["Елена К.", "Мама", "Здесь действительно слушают и помогают. Понравилось бережное отношение и понятные рекомендации."]].map(([name, role, text]) => (
          <div key={name} className="rounded-3xl border border-[#e9c9ca] bg-[#fffdfc] p-7">
            <Quote className="text-[#bd1644]" />
            <p className="mt-5 max-w-3xl text-sm leading-6 text-[#665c5e]">{text}</p>
            <div className="mt-6 text-xs"><b>{name}</b><span className="ml-3 text-[#756a6b]">{role}</span></div>
            <div className="mt-2 tracking-[3px] text-[#bd1644]">★★★★★</div>
          </div>
        ))}
      </div>
      <div className="mt-10"><Button>Оставить отзыв</Button></div>
    </div>
  );
}