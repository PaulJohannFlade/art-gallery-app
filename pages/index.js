import useSWR from "swr";

const fetcher = (url) => fetch(URL).then((response) => response.json());

const URL = `https://example-apis.vercel.app/api/art`;

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  console.log(data);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
