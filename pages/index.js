import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
const fetcher = (url) => fetch(URL).then((response) => response.json());

const URL = `https://example-apis.vercel.app/api/art`;

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const pieces = data;

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>MEGA ART GALLERY APP 4000</h1>
      <ArtPieces pieces={pieces}></ArtPieces>
    </div>
  );
}
