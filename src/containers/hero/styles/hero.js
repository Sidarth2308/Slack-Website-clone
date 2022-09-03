import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  width: 100%;
  /* padding: 0 0 50px 144px; */
  max-width: 1370px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 770px) {
    flex-direction: column;
  }
  @media (max-width: 1200px) {
    align-items: center;
  }
  font-family: "Arimo", sans-serif;
  letter-spacing: -0.2px;

  padding-top: 40px;
`;
export const MainContainer = styled.div`
  display: flex;

  background-color: #541554;
  width: 100%;
`;
export const LeftContainer = styled.div`
  display: flex;
  margin-left: 50px;
  flex-direction: column;
  /* align-items: center; */
  flex: 1;
  margin-right: 20px;
`;
export const RightContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
`;
export const LeftContainerHeading = styled.div`
  color: white;
  font-size: 3.85rem;
  font-weight: 700;
  display: inline;
  @media (max-width: 1300px) {
    font-size: 3rem;
  }
  /* @media (max-width: 1200px) {
    font-size: 3.75rem;
  } */
`;
export const LeftContainerHighlight = styled.div`
  color: white;
  font-size: 3.85rem;
  font-weight: 800;
  @media (max-width: 1300px) {
    font-size: 3rem;
  }
  color: #ecb22e;
  display: inline;
`;

export const LeftContainerSubHeading = styled.div`
  color: white;
  margin: 0.25rem 0 3.5rem;
  max-width: 34rem;
  font-size: 1.25rem;
  line-height: 1.33;
  letter-spacing: -0.2px;
  font-weight: 500;
  @media (max-width: 1300px) {
    font-size: 1rem;
    margin: 0.25rem 0 2rem;
  }
`;

export const LeftContainerButtons = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftContainerEmail = styled.div`
  font-size: 0.9375rem;
  color: #541554;
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: center;
  padding: 10px 42px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  border-radius: 2px;
  border: 1px solid white;
  background-color: white;
  &:hover {
    border: 1px solid #541554;
  }
  @media (max-width: 1200px) {
    height: 60px;
    padding: 0 42px;
    width: 100%;
    margin-bottom: 10px;

    margin-right: 0;
  }
  transition: all 0.4s ease;
  margin-right: 10px;
`;
export const LeftContainerGoogle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 2px;
  background-color: #4285f4;
  padding: 0 20px;
  padding-left: 5px;

  font-size: 0.9375rem;
  font-weight: 600;

  @media (max-width: 1200px) {
    justify-content: center;
    height: 60px;
    padding: 0 0;
    padding-left: 0;
    width: 100%;
    margin-bottom: 10px;
    position: relative;
  }
`;
export const LeftContainerGoogleLogo = styled.img`
  height: 20px;
  width: 20px;
  padding: 15px;
  margin: 5px 0;
  margin-right: 10px;
  background: #fff;
  border-radius: 2px;
  @media (max-width: 1200px) {
    position: absolute;
    left: 5px;
  }
`;
export const LeftContainerBottom = styled.div`
  color: white;
  margin: 0.25rem 0 3.5rem;
  max-width: 34rem;
  font-size: 1.25rem;
  line-height: 1.33;
  letter-spacing: -0.2px;
  font-weight: 800;
  margin-top: 20px;
  @media (max-width: 1030px) {
    display: none;
  }
`;

export const RightContainerVideo = styled.video`
  max-width: 100%;
  overflow: hidden;
  height: 100%;
  position: relative;
  bottom: 30px;
  width: auto;
  height: auto;
  background-size: cover;
  width: 100%;
  max-height: 400px;
  max-width: 700px;
  object-fit: contain;
`;
