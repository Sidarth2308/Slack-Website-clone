import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 144px;
  max-width: 1370px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 0;
    margin: 0 50px;
  }
  @media (max-width: 1030px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    margin: 0;
    padding: 0;
  }
  font-family: "Arimo", sans-serif;
  letter-spacing: -0.2px;
`;
export const MainContainer = styled.div`
  display: flex;
  width: 100%;

  background-color: #fff;
`;
export const TopContainer = styled.div`
  display: flex;
  margin-top: 100px;
  border-bottom: 1px solid #ebeaeb;
`;
export const LogoContainer = styled.div`
  flex: 1;
  width: 100%;
`;
export const Logo = styled.img``;
export const LinksContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LinksHeading = styled.div`
  display: inline-flex;
  align-items: flex-start;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  font-weight: 700;
  font-size: 0.875rem;
  height: 40px;
  position: relative;
`;
export const Link = styled.div`
  display: flex;
  align-items: flex-start;
  color: rgb(69, 66, 69);
  font-size: 0.875rem;
  height: 40px;
  position: relative;
  cursor: pointer;
  word-break: break-word;
  &:hover {
    color: rgb(18, 100, 163);
  }
`;
export const ExtraInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const ExtraInfoDark = styled.div`
  display: flex;
`;
export const ExtraInfoText = styled.div`
  display: flex;
  font-weight: 700;
  line-height: 1.2857;
  letter-spacing: normal;
  color: #000;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    color: rgb(18, 100, 163);
  }
  margin-right: 20px;
`;
export const ExtraInfoRight = styled.div`
  display: flex;
`;

export const FooterInfo = styled.div`
  font-size: 0.75rem;
  text-align: left;
  font-weight: 400;
  line-height: 1.2857;
  letter-spacing: normal;
  color: #454245;
  margin: 30px 0;
  margin-bottom: 30px;
`;
