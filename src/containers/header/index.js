import React from "react";
import {
  Container,
  HamburgerIcon,
  Link,
  LinksContainer,
  Logo,
  LogoContainer,
  MainContainer,
  SalesButton,
  SearchIcon,
  SearchIconContainer,
  ToolsContainer,
  TryButton
} from "./styles/header";
import LogoImage from "../../assets/logo.svg";
import searchIcon from "../../assets/searchIcon.svg";
import hamburgerIcon from "../../assets/hamburger.svg";
export default function Header() {
  return (
    <MainContainer>
      <Container>
        <LogoContainer>
          <Logo src={LogoImage} />
        </LogoContainer>
        <LinksContainer>
          <Link>Product</Link>
          <Link>Solutions</Link>
          <Link>Enterprise</Link>
          <Link>Resources</Link>
          <Link>Pricing</Link>
        </LinksContainer>
        <ToolsContainer>
          <SearchIconContainer>
            <SearchIcon src={searchIcon} />
          </SearchIconContainer>
          <Link>Sign in</Link>
          <SalesButton>TALK TO SALES</SalesButton>
          <TryButton>TRY FOR FREE</TryButton>
          <HamburgerIcon src={hamburgerIcon} />
        </ToolsContainer>
      </Container>
    </MainContainer>
  );
}
