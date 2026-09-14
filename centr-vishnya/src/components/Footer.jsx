
import { Link } from "react-router-dom";
import CherryIllustration from "./CherryIllustration";

export default function Footer() {
  return (
    <footer className="bg-[#fbf5f3]">
      <div className="mx-auto max-w-[1350px] px-5 pb-6 pt-8 lg:px-8 lg:pb-8 lg:pt-14">
        <div className="grid gap-6 md:grid-cols-4 md:gap-10">

          <div>
            <div className="flex items-center gap-2">
              <span className="h-[42px] w-[42px] text-[#a91842] lg:h-[50px] lg:w-[50px]">
                <CherryIllustration />
              </span>

              <span className="font-display text-lg">
                Вишня
              </span>
            </div>

            <p className="mt-2 max-w-[250px] text-xs leading-5 text-[#665c5e]">
              Бережное пространство поддержки для детей, подростков, взрослых и семей.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold">
              Навигация
            </h3>

            <div className="mt-3 flex flex-col gap-1.5 text-xs text-[#665c5e]">
              <Link to="/services">Услуги и цены</Link>
              <Link to="/about">О центре</Link>
              <Link to="/about#team">Специалисты</Link>
              <Link to="/articles">Статьи</Link>
              <Link to="/reviews">Отзывы</Link>
              <Link to="/contacts">Контакты</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold">
              Контакты
            </h3>

            <div className="mt-3 flex flex-col gap-1.5 text-xs text-[#665c5e]">
              <a href="tel:+79254843022">
                +7 925 484-30-22
              </a>

              <a
                href="mailto:centrvishnya@yandex.ru"
                className="underline"
              >
                centr​​vishnya@yandex.ru
              </a>

              <span>г. Москва, 125475</span>
              <span>Зеленоградская улица 17</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold">
              Режим работы
            </h3>

            <p className="mt-3 text-xs text-[#665c5e]">
              Пн — Вс&nbsp;&nbsp; 9:00 — 21:00
            </p>
          </div>

        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[#eadbd8] pt-4 text-[10px] text-[#766a6c] sm:flex-row sm:items-center sm:justify-between lg:mt-14 lg:pt-5">

          <span>
            © 2026 Центр «Вишня». Все права защищены.
          </span>

          <div className="flex gap-4 sm:gap-6">
            <a href="#">
              Политика конфиденциальности
            </a>

            <a href="#">
              Карта сайта
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

