import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mx-auto max-w-md px-5 py-20">
      <h1 className="font-display text-4xl">Вход</h1>
      <p className="mt-3 text-sm text-[#6b6162]">Функционал авторизации подключается после уточнения старой БД.</p>
      <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input className="w-full rounded-xl border border-[#e8d7d5] bg-white px-4 py-3 text-sm" placeholder="Email" type="email"/>
        <input className="w-full rounded-xl border border-[#e8d7d5] bg-white px-4 py-3 text-sm" placeholder="Пароль" type="password"/>
        <button className="w-full rounded-full bg-[#bd1644] py-3 text-sm text-white">Войти</button>
      </form>
      <p className="mt-5 text-xs text-[#6b6162]">Нет аккаунта? <Link className="text-[#bd1644]" to="/register">Зарегистрироваться</Link></p>
    </div>
  );
}