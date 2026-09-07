import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#fbf5f3]">
      <div className="mx-auto max-w-[1350px] px-5 pb-8 pt-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl text-[#a91842]">✿</span>
              <span className="font-display text-lg">Вишня</span>
            </div>
            <p className="mt-3 max-w-[250px] text-xs leading-5 text-[#665c5e]">
              Бережное пространство поддержки для детей, подростков, взрослых и семей.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold">Навигация</h3>
            <div className="mt-4 flex flex-col gap-2 text-xs text-[#665c5e]">
              <Link to="/services">Услуги и цены</Link>
              <Link to="/about">О центре</Link>
              <Link to="/about#team">Специалисты</Link>
              <Link to="/articles">Статьи</Link>
              <Link to="/reviews">Отзывы</Link>
              <Link to="/contacts">Контакты</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold">Контакты</h3>
            <div className="mt-4 flex flex-col gap-2 text-xs text-[#665c5e]">
              <a href="tel:+79254843022">+7 925 484-30-22</a>
              <a href="mailto:centrvishnya@yandex.ru" className="underline">centrvishnya@yandex.ru</a>
              <span>г. Москва, 125475</span>
              <span>Зеленоградская улица 17</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold">Режим работы</h3>
            <p className="mt-4 text-xs text-[#665c5e]">Пн — Вс&nbsp;&nbsp; 9:00 — 21:00</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#eadbd8] pt-5 text-[10px] text-[#766a6c] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Центр «Вишня». Все права защищены.</span>
          <div className="flex gap-6">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}