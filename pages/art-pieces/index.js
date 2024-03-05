import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ pieces }) {
  console.log(pieces[0]);
  return <ArtPieces pieces={pieces}></ArtPieces>;
}
