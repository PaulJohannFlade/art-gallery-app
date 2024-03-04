import Image from "next/image";
export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image
        src={image}
        height={200}
        width={150}
        alt={`A picture called ${title}`}
      />
      <br></br>
      {artist}: {title}
    </>
  );
}
