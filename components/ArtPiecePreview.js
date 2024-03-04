import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 192px;
  height: auto;
`;

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <StyledImage
        src={image}
        height={200}
        width={150}
        alt={`A picture called ${title}`}
      />
      <br></br>
      {artist}: {title}
    </>
  );
}
