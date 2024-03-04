import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
const fetcher = (url) => fetch(URL).then((response) => response.json());

const URL = `https://example-apis.vercel.app/api/art`;

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const pieces = data;

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  function getRandomPiece(length) {
    return Math.floor(Math.random() * length);
  }
  const randomPiece = pieces[getRandomPiece(pieces.length)];
  console.log(randomPiece);
  return (
    <div>
      <h1>MEGA ART GALLERY APP 4000</h1>
      <Spotlight
        artist={randomPiece.artist}
        image={randomPiece.imageSource}
      ></Spotlight>
      <ArtPieces pieces={pieces}></ArtPieces>
    </div>
  );
}
