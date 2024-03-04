import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

export default function Navigation() {
  return (
    <StyledNav>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Artpieces</StyledLink>
    </StyledNav>
  );
}
