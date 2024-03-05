import GlobalStyle from "../styles";
import useSWR from "swr";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";

const fetcher = (url) => fetch(URL).then((response) => response.json());

const URL = `https://example-apis.vercel.app/api/art`;

const initialState = [
  { slug: "orange-red-and-green", isFavorite: true },
  { slug: "blue-and-red", isFavorite: false },
];
export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState(initialState);
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const pieces = data;

  // console.log(pieces);
  // console.log(initialState[0]);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesinfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);

      if (info) {
        return (
          artPiecesInfo.map((info) =>
            info.slug === slug
              ? { ...info, isFavorite: !info.isFavorite }
              : info
          ),
          console.log(artPiecesinfo)
        );
      }
      return (
        [...artPiecesInfo, { slug, isFavorite: true }],
        console.log(artPiecesinfo)
      );
    });
  }

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component
        toggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        pieces={pieces}
        {...pageProps}
      />
      <Layout />
    </SWRConfig>
  );
}
