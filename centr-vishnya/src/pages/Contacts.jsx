import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contacts() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8 lg:py-20">
      <span className="rounded-full bg-[#f9dfe2] px-3 py-1 text-[10px] text-[#b21745]">Контакты</span>
      <h1 className="mt-5 font-display text-5xl">Запишитесь на приём</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-[#fff2f0] p-8">
          <h2 className="font-display text-3xl">Оставьте заявку</h2>
          <form className="mt-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full rounded-xl border border-[#e8d7d5] bg-white px-4 py-3 text-sm outline-none focus:border-[#bd1644]" placeholder="Ваше имя" />
            <input className="w-full rounded-xl border border-[#e8d7d5] bg-white px-4 py-3 text-sm outline-none focus:border-[#bd1644]" placeholder="Телефон" />
            <textarea rows="5" className="w-full rounded-xl border border-[#e8d7d5] bg-white px-4 py-3 text-sm outline-none focus:border-[#bd1644]" placeholder="Ваш вопрос" />
            <button className="w-full rounded-full bg-[#bd1644] px-5 py-3 text-sm text-white hover:bg-[#9f123a]">Отправить заявку</button>
          </form>
        </div>
        <div className="rounded-3xl bg-[#e9d8cd] p-8">
          <div className="space-y-7">
            <div className="flex gap-4"><MapPin className="text-[#bd1644]" /><div><b className="text-sm">Адрес</b><p className="mt-1 text-xs text-[#665c5e]">г. Москва, 125475<br/>Зеленоградская улица 17</p></div></div>
            <div className="flex gap-4"><Phone className="text-[#bd1644]" /><div><b className="text-sm">Телефон</b><p className="mt-1 text-xs text-[#665c5e]">+7 925 484-30-22</p></div></div>
            <div className="flex gap-4"><Mail className="text-[#bd1644]" /><div><b className="text-sm">Почта</b><p className="mt-1 text-xs text-[#665c5e]">centrvishnya@yandex.ru</p></div></div>
            <div className="flex gap-4"><Clock className="text-[#bd1644]" /><div><b className="text-sm">Режим работы</b><p className="mt-1 text-xs text-[#665c5e]">Пн — Вс, 9:00 — 21:00</p></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}