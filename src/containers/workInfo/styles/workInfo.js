import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 40px;
  max-width: 1370px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1030px) {
    flex-direction: column;
  }
  font-family: "Arimo", sans-serif;
  letter-spacing: -0.2px;
  padding-top: 40px;
`;
export const MainContainer = styled.div`
  display: flex;

  background-color: #f4ede4;
  width: 100%;
`;

export const InfoText = styled.div`
  display: flex;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.125;
  letter-spacing: 0.8px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-align: center;
  color: black;
  width: 100%;
  justify-content: center;
`;

export const InfoCompanies = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
  @media (max-width: 800px) {
    margin-right: 15px;
    flex-wrap: wrap;
  }
`;
export const InfoCompany = styled.img`
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1030px) {
    margin-right: 15px;
  }

  height: ${(props) => (props.height ? props.height : "40px")};
`;
export const ExtraInfoBox = styled.div`
  display: flex;
  margin: 0 50px;
  @media (max-width: 1350px) {
    flex-direction: column;
    margin: 0 0px;
  }
  flex-direction: column;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.toLeft ? "flex-start" : "flex-end")};
  align-items: center;
  flex-direction: ${(props) => (props.rowReverse ? "row-reverse" : "row")};
  margin-top: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const InfoTextBoxContainer = styled.div`
  display: flex;
  align-items: ${(props) => (props.toLeft ? "flex-start" : "flex-end")};
  justify-content: ${(props) => (props.toLeft ? "flex-start" : "flex-end")};
  flex: 1;
`;

export const InfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.toLeft ? "flex-start" : "flex-end")};
  max-width: 500px;
`;

export const InfoTextHeading = styled.div`
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.8px;
  margin-bottom: 1rem;
  color: black;
  @media (max-width: 1300px) {
    font-size: 2.75rem;
  }
`;
export const InfoTextDesc = styled.div`
  font-weight: 400;
  line-height: 1.4444;
  letter-spacing: -0.2px;
  font-size: 1.125rem;
  margin-bottom: 1rem;
  color: black;
  @media (max-width: 1300px) {
    font-size: 1rem;
  }
`;
export const InfoTextLinkBox = styled.div``;
export const InfoTextLink = styled.div`
  /* display: flex; */
  display: inline-block;
  cursor: pointer;
  color: #1264a3;
  border-bottom-color: #1264a3;
  border-bottom-width: 2px;
  outline: 0;
  font-weight: 400;
  line-height: 1.4444;
  letter-spacing: normal;
  font-size: 1.125rem;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #1264a3;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 1300px) {
    font-size: 1rem;
  }
`;
export const InfoVideoBox = styled.div`
  width: 100%;
  flex: 1;
  @media (max-width: 700px) {
    width: 100%;
    height: 600px;

    overflow: hidden;
    object-fit: fill;
    object-position: center center;
  }
  object-position: center center;
`;

export const InfoVideo = styled.video`
  width: 100%;
  object-position: center center;
  @media (max-width: 700px) {
    width: 100%;
    height: 600px;
    height: auto;
    object-fit: fill;
    object-position: center center;
  }
  @media (max-width: 1000px) {
    width: 687px;
  }
`;
