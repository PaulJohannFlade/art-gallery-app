import ArtPiecePreview from "./ArtPiecePreview";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const StyledListItems = styled.li`
  margin: 2rem;
`;

export default function ArtPieces({ pieces }) {
  return (
    <StyledList>
      {pieces.map((piece) => (
        <StyledListItems key={piece.name}>
          <StyledLink href={`/art-pieces/${piece.slug}`}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </StyledLink>
        </StyledListItems>
      ))}
    </StyledList>
  );
}
