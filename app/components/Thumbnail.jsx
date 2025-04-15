"use client";

import Image from "next/image";
import Link from "next/link";

const Thumbnail = ({ image, slug, titel }) => {
  return (
    <Link href={`/produktserie/${slug}`}>
      <Image
        src={image}
        width={320}
        height={180}
        alt={"Thumbnail"}
        className="cursor-pointer rounded-lg hover:scale-110"
      />
    </Link>
  );
};

export default Thumbnail;
