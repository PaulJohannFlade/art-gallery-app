import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  toggleFavorite,
  artPiecesInfo,
  pieces,
}) {
  function getRandomPiece(length) {
    return Math.floor(Math.random() * length);
  }
  const randomPiece = pieces[getRandomPiece(pieces.length)];

  return (
    <div>
      <h1>MEGA ART GALLERY APP 4000</h1>
      <Spotlight
        toggleFavorite={toggleFavorite}
        artPiecesInfo={artPiecesInfo}
        pieces={pieces}
        artist={randomPiece.artist}
        image={randomPiece.imageSource}
      />
    </div>
  );
}
