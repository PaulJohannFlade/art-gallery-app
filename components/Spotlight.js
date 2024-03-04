import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <article>
      <h2>Spotlight Art Piece</h2>
      <Image
        src={image}
        height={600}
        width={400}
        alt={`A picture by ${artist}`}
      />
      <p>Artist: {artist}</p>
    </article>
  );
}
