import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding: 0 144px; */
  /* background-color: #fff; */
  max-width: 1370px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1030px) {
    flex-direction: column;
  }
  font-family: "Arimo", sans-serif;
  letter-spacing: -0.2px;
  padding-top: 70px;
  box-sizing: border-box;
`;
export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #f4ede4;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.1875;
  letter-spacing: -0.3px;
  margin-bottom: 1rem;
  color: #000;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 50px;
  justify-content: center;
`;

export const CardFirst = styled.div`
  background-color: #4a154b;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  box-shadow: 0 0 2rem rgb(0 0 0 / 10%);
  /* flex-basis: 23.17%; */
  margin-bottom: 2.43902439%;
  display: flex;
  width: 100%;
  min-height: 420px;
  flex-direction: column;
  border-bottom: none;
  max-width: 285px;
  position: relative;
  z-index: 1;
  padding: 10px;
  justify-content: space-between;
  transition: transform 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: scale(1.05);
  }
  padding-bottom: 15px;
`;
export const CardFirstBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardFirstType = styled.div`
  color: #fff;
  line-height: 1.3;
  letter-spacing: 0.1px;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 8px 0 0;
  display: inline-block;
  word-break: break-word;
`;

export const CardFirstHeading = styled.div`
  color: #fff;
  max-height: 349px;
  line-height: 30px;
  font-size: 1.38rem;
  font-weight: 700;
  letter-spacing: normal;
  margin: 0.5rem 0 1rem;
`;
export const CardImage = styled.img`
  margin-top: 2.5rem;
  height: 13rem;
  overflow: hidden;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  display: block;
  /* margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px; */
`;
export const CardFirstBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CardNext = styled.div`
  background-color: white;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  box-shadow: 0 0 2rem rgb(0 0 0 / 10%);
  /* flex-basis: 23.17%; */
  margin-bottom: 2.43902439%;
  display: flex;
  width: 100%;
  min-height: 420px;
  flex-direction: column;
  border-bottom: none;
  max-width: 285px;
  position: relative;
  z-index: 1;
  padding: 10px;

  margin-left: 30px;
  transition: transform 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: scale(1.05);
  }
  padding-bottom: 15px;
`;
export const CardExtraBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;
export const CardNextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CardNextImage = styled.img``;
export const CardType = styled.div`
  color: #454245;
  line-height: 1.3;
  letter-spacing: 0.1px;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 8px 0 0;
  display: inline-block;
  word-break: break-word;
`;
export const CardHeading = styled.div`
  color: black;
  max-height: 349px;
  line-height: 30px;
  font-size: 1.38rem;
  font-weight: 700;
  letter-spacing: normal;
  margin: 0.5rem 0 1rem;
`;

export const CardNextBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const CardBottomText = styled.div`
  color: #1264a3;
  line-height: 1.3;
  letter-spacing: 0.1px;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 8px 0 0;
  display: inline-block;
  word-break: break-word;
`;
