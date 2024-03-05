import styled from "styled-components";
import Heart from "assets/heart.svg";

export default function FavoriteButton({
  toggleFavorite,
  artPiecesInfo,
  pieces,
}) {
  return (
    <>
      {/* Idee von Jana: StyledButton statt div, mit styles default button setttings wegnehmen */}
      <div>
        <Heart onClick={toggleFavorite} />
      </div>
    </>
  );
}
