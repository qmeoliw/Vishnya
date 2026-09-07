import {
  ArrowUpRight,
  Heart,
  CircleMinus,
  Diamond,
  Clover,
  Grid3X3,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import CherryIllustration from "../components/CherryIllustration";
import { services } from "../data/services";

const specialists = [
  {
    role: "Психолог",
    name: "Куляева Нина",
    desc: "Психолог, педагог-психолог, клинический психолог, аналитический психолог, психолог диагност",
    photo: "bg-[#e6d7d0]",
  },
  {
    role: "Нейропсихолог",
    name: "Шаройко Полина",
    desc: "Клинический психолог, нейропсихолог",
    photo: "bg-[#c7c1bc]",
  },
  {
    role: "Нейропсихолог",
    name: "Мозжухина Ольга",
    desc: "Психолог, клинический психолог, нейропсихолог",
    photo: "bg-[#d9d4ce]",
  },
];

const reasons = [
  [
    "01",
    "Комплексный взгляд",
    "Учитываем эмоции, обучение, речь, контекст и ресурс человека.",
    Heart,
  ],
  [
    "02",
    "Тёплая среда",
    "Создаём безопасное пространство, где можно быть собой.",
    CircleMinus,
  ],
  [
    "03",
    "Поддержка детей и взрослых",
    "Помогаем не только ребёнку, но и родителям, подросткам и взрослым.",
    Clover,
  ],
  [
    "04",
    "Понятный маршрут помощи",
    "После диагностики вы получаете чёткий и реалистичный план действий.",
    Grid3X3,
  ],
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-[1350px] px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <span className="inline-flex rounded-full bg-[#f9dfe2] px-3 py-1.5 text-[10px] text-[#b21745]">
              Психолого-педагогический центр
            </span>
            <h1 className="mt-5 max-w-[700px] font-display text-4xl leading-[1.08] tracking-[-0.025em] sm:text-5xl lg:text-[58px]">
              Центр комплексной помощи в развитии «Вишня»
            </h1>
            <p className="mt-5 max-w-[530px] text-sm leading-6 text-[#6b6162]">
              Бережное пространство поддержки для детей, подростков, взрослых и
              семей.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Записаться на приём</Button>
              <Button to="/about" variant="secondary">
                Узнать о центре
              </Button>
            </div>

            <div className="mt-14 grid max-w-[600px] grid-cols-3 gap-5">
              {[
                [Heart, "Профессиональная команда"],
                [CircleMinus, "Индивидуальный подход"],
                [Diamond, "Конфиденциальность и безопасность"],
              ].map(([Icon, text]) => (
                <div
                  key={text}
                  className="flex gap-2 text-[9px] leading-3 text-[#6b6162]"
                >
                  <Icon size={16} className="shrink-0 text-[#bd1644]" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[330px] overflow-hidden rounded-[72px] bg-[#f3e1dd] sm:min-h-[430px]">
            <div className="absolute left-9 top-10 max-w-[180px] font-display text-2xl leading-tight sm:left-12 sm:top-12 sm:text-3xl">
              Расти
              <br />в своём темпе
            </div>
            <div className="absolute bottom-10 left-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#f8cbd0] px-3 text-center text-[9px] leading-3 text-[#8d5c64]">
              Поддержка
              <br />
              сегодня —<br />
              уверенное завтра
            </div>
            <div className="h-[300px] md:h-[450px] flex items-center justify-end">
              <img
                src="/images/icons.png"
                alt="Центр Вишня"
                className=" w-[400px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-t-[46px] bg-[#fffdfc] px-5 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1350px]">
          <SectionHeading
            title="Ключевые направления"
            linkText="Все услуги"
            to="/services"
          />
          <div className="grid gap-3 md:grid-cols-2">
            {services.slice(0, 2).map((service) => (
              <Link
                to={`/services/${service.slug}`}
                key={service.slug}
                className="group flex min-h-[130px] items-center gap-5 rounded-2xl bg-[#fff2f0] p-6 transition hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fde0e4] text-[#bd1644]">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl">{service.title}</h3>
                  <p className="mt-2 max-w-[470px] text-xs leading-5 text-[#746a6b]">
                    {service.short}
                  </p>
                </div>
                <ArrowUpRight
                  size={17}
                  className="text-[#bd1644] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            ))}
          </div>

          <div className="mt-14">
            <SectionHeading title="Почему выбирают нас" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map(([num, title, text, Icon]) => (
                <div
                  key={num}
                  className="min-h-[205px] rounded-2xl bg-[#fff2f0] p-5"
                >
                  <Icon size={19} className="text-[#bd1644]" />
                  <div className="mt-5 text-[9px] text-[#bd1644]">{num}</div>
                  <h3 className="mt-2 font-display text-lg">{title}</h3>
                  <p className="mt-4 text-[10px] leading-4 text-[#746a6b]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14" id="team">
            <SectionHeading
              title="Наши специалисты"
              linkText="Вся команда"
              to="/about#team"
            />
            <div className="grid gap-3 lg:grid-cols-3">
              {specialists.map((person) => (
                <div
                  key={person.name}
                  className="flex min-h-[155px] overflow-hidden rounded-2xl bg-[#fff2f0]"
                >
                  <div className={`w-[38%] ${person.photo}`} />
                  <div className="p-5">
                    <div className="text-[9px] text-[#756a6b]">
                      {person.role}
                    </div>
                    <h3 className="mt-2 font-display text-lg">{person.name}</h3>
                    <p className="mt-4 text-[9px] leading-4 text-[#746a6b]">
                      {person.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="mt-14 grid items-center gap-8 lg:grid-cols-2">
            <div className="min-h-[310px] rounded-[60px] bg-[#e9d8cd]" />
            <div>
              <span className="rounded-full bg-[#f9dfe2] px-3 py-1 text-[10px] text-[#b21745]">
                О центре
              </span>
              <h2 className="mt-5 max-w-[550px] font-display text-3xl leading-tight sm:text-4xl">
                С заботой о гармоничном развитии
              </h2>
              <p className="mt-5 max-w-[560px] text-xs leading-5 text-[#6b6162]">
                «Вишня» — это команда специалистов, которые верят в потенциал
                каждого человека. Мы помогаем справляться с трудностями,
                развивать сильные стороны и находить ресурсы для счастливой
                жизни.
              </p>
              <div className="mt-6">
                <Button to="/about" variant="secondary">
                  Узнать больше
                </Button>
              </div>
              <div className="mt-7 grid max-w-[450px] grid-cols-3 gap-5">
                <div>
                  <b className="font-display text-2xl text-[#bd1644]">5+</b>
                  <p className="text-[9px] text-[#756a6b]">лет работы</p>
                </div>
                <div>
                  <b className="font-display text-2xl text-[#bd1644]">500+</b>
                  <p className="text-[9px] text-[#756a6b]">
                    семей получили поддержку
                  </p>
                </div>
                <div>
                  <b className="font-display text-2xl text-[#bd1644]">12</b>
                  <p className="text-[9px] text-[#756a6b]">
                    направлений помощи
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-14">
            <SectionHeading
              title="Отзывы"
              linkText="Все отзывы"
              to="/reviews"
            />
            <div className="rounded-2xl border border-[#e9c9ca] bg-[#fffdfc] p-7 sm:p-10">
              <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="flex gap-4">
                  <Quote size={25} className="shrink-0 text-[#bd1644]" />
                  <p className="max-w-[680px] text-xs leading-5 text-[#665c5e]">
                    Очень благодарны специалистам центра «Вишня»! Ребёнок стал
                    увереннее, появились новые навыки, а мы получили важные
                    рекомендации. Здесь действительно слушают и помогают.
                  </p>
                </div>
                <div className="text-right text-[10px]">
                  <b>Анна С.</b>
                  <div className="mt-1 text-[#756a6b]">Мама, г. Москва</div>
                  <div className="mt-2 tracking-[3px] text-[#bd1644]">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 flex flex-col gap-7 rounded-[28px] bg-[#fde0e3] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-[10px] text-[#b21745]">
                Остались вопросы?
              </div>
              <h2 className="mt-2 max-w-[600px] font-display text-3xl leading-tight sm:text-4xl">
                Нужна спокойная и бережная точка входа?
              </h2>
              <p className="mt-2 max-w-[570px] text-[10px] leading-4 text-[#756a6b]">
                Оставьте заявку прямо с главной страницы — мы свяжемся с вами и
                подберём удобное время.
              </p>
            </div>
            <Button>Записаться на приём</Button>
          </section>
        </div>
      </section>
    </>
  );
}
