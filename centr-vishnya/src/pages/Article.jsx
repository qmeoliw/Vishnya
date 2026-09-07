import { useParams } from "react-router-dom";
import { articles } from "../data/articles";
import Button from "../components/Button";

export default function Article() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug) || articles[0];

  return (
    <article className="mx-auto max-w-[900px] px-5 py-14 lg:py-20">
      <div className="text-xs text-[#bd1644]">{article.category} · {article.date}</div>
      <h1 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">{article.title}</h1>
      <div className="mt-10 h-72 rounded-[36px] bg-[#e9d8cd]" />
      <div className="mt-10 space-y-5 text-sm leading-7 text-[#5f5557]">
        <p>Материал раздела статей центра «Вишня». Здесь будет размещён полноценный текст статьи, подготовленный специалистами центра.</p>
        <p>Информация помогает родителям и взрослым лучше ориентироваться в вопросах развития и понимать, когда стоит обратиться за профессиональной поддержкой.</p>
      </div>
      <div className="mt-10"><Button>Записаться на приём</Button></div>
    </article>
  );
}