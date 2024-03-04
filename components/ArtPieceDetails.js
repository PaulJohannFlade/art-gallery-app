import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <StyledArticle>
      <StyledLink href="/art-pieces">⬅</StyledLink>
      <StyledImage src={image} height={400} width={300} alt={title} />
      <h1>{title}</h1>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </StyledArticle>
  );
}
