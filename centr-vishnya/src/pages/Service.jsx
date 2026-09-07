import { useParams } from "react-router-dom";
import { services } from "../data/services";
import Button from "../components/Button";

export default function Service() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug) || services[0];

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-14 lg:py-20">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fde0e4] text-[#bd1644]">{service.icon}</div>
      <h1 className="mt-6 font-display text-4xl leading-tight sm:text-6xl">{service.title}</h1>
      <p className="mt-6 max-w-2xl text-sm leading-6 text-[#6b6162]">{service.text}</p>
      <div className="mt-8"><Button>Записаться на приём</Button></div>
    </div>
  );
}