"use client";

import { usePathname } from "next/navigation";

import Header from "./Header";
import Footer from "./Footer";

export default function LayoutrWrapper({ children }) {
  const pathname = usePathname();
  const hideHeader = pathname === "/login";
  const hideFooter = pathname === "/login";

  return (
    <div className="w-lvw h-lvh ">
      {!hideHeader && <Header />}
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
}
