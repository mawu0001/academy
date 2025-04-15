"use client";

import Video from "./Video";

const Gallery = ({ data, onVideoClick, currentVideoIndex }) => {
  if (data.length === 1) {
    return null;
  }

  return (
    <div className="mt-8">
      <h4>Flere videoer</h4>
      <div className="flex flex-wrap gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={index === currentVideoIndex ? "opacity-50" : ""}
          >
            <Video
              poster={item.thumbnail}
              titel={item.titel}
              onClick={() => onVideoClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
