import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  width: 100%;
  /* padding: 0 144px; */
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1300px) {
    max-width: 1200px;
    margin: 0 50px;
  }

  font-family: "Arimo", sans-serif;
  letter-spacing: -0.2px;
`;
export const MainContainer = styled.div`
  display: flex;
  width: 100%;

  background-color: #541554;
`;
export const LogoContainer = styled.div`
  display: flex;
  height: 81px;
  width: 125px;
  align-items: center;
  margin-right: 5px;
  cursor: pointer;
`;
export const Logo = styled.img``;
export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  margin-right: 15px;
  font-size: 0.9375rem;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const ToolsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
export const SearchIconContainer = styled.div`
  margin-right: 30px;
  cursor: pointer;
  user-select: none;
`;
export const SearchIcon = styled.img`
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(17deg)
    brightness(119%) contrast(120%);
  position: relative;
  top: 2px;
`;

export const SalesButton = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 148px;
  height: 40px;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
  border: 1px solid white;
  margin-right: 20px;
  font-weight: 600;
  margin-left: 15px;
  &:hover {
    border: 2px solid white;
    width: 146px;
  }
  transition: all 0.4s ease;
  font-size: 0.9375rem;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const TryButton = styled.div`
  font-size: 0.9375rem;
  color: #541554;
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: center;
  width: 140px;
  height: 40px;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
  border: 1px solid white;
  background-color: white;
  &:hover {
    border: 1px solid #541554;
  }
  transition: all 0.4s ease;
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const HamburgerIcon = styled.img`
  filter: invert(100%) sepia(0%) saturate(7493%) hue-rotate(211deg)
    brightness(102%) contrast(102%);
  @media (min-width: 1100px) {
    display: none;
  }
`;
