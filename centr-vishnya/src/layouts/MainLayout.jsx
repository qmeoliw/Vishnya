import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#fbf5f3] text-[#241b1d]">
      <Header />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
}