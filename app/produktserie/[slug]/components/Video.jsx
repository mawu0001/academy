"use client";

import Image from "next/image";

const Video = ({ titel, poster, onClick }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* <h4>{titel}</h4> */}

      <Image
        src={poster}
        width={200}
        height={112}
        alt="Thumbnail"
        className="w-full h-auto rounded-lg cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
};

export default Video;
