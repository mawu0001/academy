"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import Thumbnail from "./Thumbnail";

const CSVReader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/1eMOouDlqg0mIqFa6hbuUT2Bxyypt47-NQBZhTB_ordk/export?format=csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => setData(result.data),
        });
      })
      .catch((error) => console.error("Error loading CSV:", error));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-y-8 place-content-between">
          {data.map((row, index) => (
            <Thumbnail
              key={index}
              image={row.thumbnail
                .replace("file/d/", "uc?id=")
                .replace("/view?usp=sharing", "")}
              slug={row.slug}
              titel={row.titel}
            />
          ))}
        </div>
      ) : (
        <p>Loading CSV data...</p>
      )}
    </div>
  );
};

export default CSVReader;
