"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideHeader = pathname === "/login";

  return (
    <>
      {!hideHeader && <Header />}
      {children}
      <Footer />
    </>
  );
}
