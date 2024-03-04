import GlobalStyle from "../styles";
import useSWR from "swr";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout";

const fetcher = (url) => fetch(URL).then((response) => response.json());

const URL = `https://example-apis.vercel.app/api/art`;

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const pieces = data;

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component pieces={pieces} {...pageProps} />
      <Layout />
    </SWRConfig>
  );
}
