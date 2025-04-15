"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Papa from "papaparse";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/1eMOouDlqg0mIqFa6hbuUT2Bxyypt47-NQBZhTB_ordk/export?format=csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvText) => {
        const { data } = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        const uniqueCategories = [
          ...new Set(
            data.map((row) => ({
              slug: row.slug?.trim(),
              title: row.titel?.trim(),
            }))
          ),
        ].filter((row) => row.slug && row.title);

        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error loading CSV:", error));
  }, []);

  return (
    <header>
      <div className="bg-[#252522] h-9"></div>
      <div className="mb-16 w-full flex items-center justify-between px-12">
        <Link href="/forside">
          <Image
            src="/img/gastrotools_logo_horizontal_positive_rgb.png"
            width={180}
            height={110}
            alt="logo"
            className="cursor-pointer py-2"
          />
        </Link>
        <div className="flex gap-x-4 relative">
          <Link
            href="/brandpage"
            className="hover:underline hover:underline-offset-4 transition-all duration-200"
          >
            <h5>Brand</h5>
          </Link>

          <div className="relative group">
            <button className="text-[#252522] cursor-pointer">
              <h5 className="hover:underline hover:underline-offset-4">
                Produkter
              </h5>
            </button>

            <div className="absolute top-full  right-0 hidden group-hover:flex flex-col bg-[#FCFBF7] p-4 z-10 ">
              {categories.length > 0 &&
                categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/produktserie/${category.slug.toLowerCase()}`}
                  >
                    <h5 className="hover:underline hover:underline-offset-4 py-1">
                      {category.title}
                    </h5>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
