"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Papa from "papaparse";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

export default function ProductSeriesPage() {
  const { slug } = useParams();
  const [data, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (!slug) return;

    const csvUrl =
      "https://docs.google.com/spreadsheets/d/1qDPYW5Y3aJTFGRAKm8fs_wmBNHqx2RolQ8JEoWWtHaY/gviz/tq?tqx=out:csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvText) => {
        const { data } = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        setFilteredData(
          data.filter((row) => row.slug?.toLowerCase() === slug.toLowerCase())
        );
        setLoading(false);
      });
  }, [slug]);

  const handleVideoChange = (direction) => {
    setCurrentVideoIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? data.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === data.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const handleVideoSwap = (index) => {
    setCurrentVideoIndex(index);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <section>
        <h1 className="text-center">{data[currentVideoIndex]?.herotitel}</h1>
        <ul className="flex place-content-evenly">
          {data[currentVideoIndex]?.tags?.split(",").map((tag, i) => (
            <li key={i}>{tag.trim()}</li>
          ))}
        </ul>
        <p className="text-center">{data[currentVideoIndex]?.description1}</p>
        <Hero
          titel={data[currentVideoIndex]?.titel}
          youtubeUrl={data[currentVideoIndex]?.video}
          onChangeVideo={handleVideoChange}
          videoCount={data.length}
        />

        <Gallery
          data={data}
          onVideoClick={handleVideoSwap}
          currentVideoIndex={currentVideoIndex}
        />
      </section>
    </main>
  );
}
