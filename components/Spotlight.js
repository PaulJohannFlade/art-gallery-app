import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
export default function Spotlight({
  toggleFavorite,
  pieces,
  isFavorite,
  artPiecesInfo,
  image,
  artist,
}) {
  return (
    <article>
      <h2>Spotlight Art Piece</h2>
      <Image
        src={image}
        height={600}
        width={400}
        alt={`A picture by ${artist}`}
      />
      <br></br>
      <FavoriteButton
        toggleFavorite={toggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <p>Artist: {artist}</p>
    </article>
  );
}
