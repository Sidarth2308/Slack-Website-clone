import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1370px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1030px) {
    flex-direction: column;
  }
  font-family: "Arimo", sans-serif;
  letter-spacing: -0.2px;

  /* padding-top: 40px; */
`;
export const MainContainer = styled.div`
  display: flex;
  width: 100%;

  clip-path: ellipse(75% 100% at center top);
  background-color: #4a154b;
  /* background-color: #fff; */
`;
export const WelcomeContainer = styled.div`
  width: 100%;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  background-color: #4a154b;
  align-items: center;
  padding-bottom: 100px;
`;
export const WelcomeContainerHeading = styled.div`
  color: white;
  user-select: none;
  margin-bottom: 2rem;
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 1.1875;
  letter-spacing: -0.8px;
  margin-top: 0;
`;
export const WelcomeContainerButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const WelcomeTryButton = styled.div`
  font-size: 0.9375rem;
  color: #541554;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
  border: 1px solid #541554;
  background-color: white;
  margin-right: 20px;
  &:hover {
    padding: 19px 39px;
    border: 2px solid #541554;
  }
  transition: all 0.4s ease;
`;
export const WelcomeSalesButton = styled.div`
  font-size: 0.9375rem;
  color: white;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
  border: 1px solid white;
  &:hover {
    padding: 19px 39px;
    border: 2px solid white;
  }
  transition: all 0.4s ease;
`;
