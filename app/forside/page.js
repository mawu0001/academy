"use client";
import Link from "next/link";
import CSVReader from "../components/CSVReader";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Forside = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAuthenticated");
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  return (
    <div>
      {isAuthenticated ? (
        <main className="w-full">
          <section className="w-full">
            <h1 className="mb-4">Gastrotools Product Academy</h1>
            <div className="flex gap-4 place-items-center">
              <div className="gap-y-4 flex flex-col">
                <Link href="/brandpage">
                  <h4 className="text-sm">Brand & Misson → </h4>
                </Link>
                <p className="max-w-prose">
                  Vi er på en mission om at give hjemmekokke værktøjerne til
                  bedre madlavning. Både i form af køkken værktøjer i
                  professionel kvalitet, men også gennem det omfattende Gastro
                  Studio med masser af læring, underholdning og inspiration til
                  bedre madlavning.
                </p>
              </div>
              <iframe
                width="560"
                height="250"
                src="https://www.youtube.com/embed/ltz40Q04UBo?si=fl-TmCLv2TwSSVfw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="mt-20">
              <h4 className="py-3"> Produkter</h4>
              <CSVReader />
            </div>
          </section>
        </main>
      ) : (
        <p>Du bliver omdirigeret til login-siden...</p>
      )}
    </div>
  );
};

export default Forside;
