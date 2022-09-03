import React from "react";
import {
  Container,
  MainContainer,
  WelcomeContainer,
  WelcomeContainerButtons,
  WelcomeContainerHeading,
  WelcomeSalesButton,
  WelcomeTryButton
} from "./styles/preFooter";

export default function PreFooter() {
  return (
    <MainContainer>
      <Container>
        <WelcomeContainer>
          <WelcomeContainerHeading>
            Welcome to your new digital HQ.
          </WelcomeContainerHeading>
          <WelcomeContainerButtons>
            <WelcomeTryButton>TRY FOR FREE</WelcomeTryButton>
            <WelcomeSalesButton>TALK TO SALES</WelcomeSalesButton>
          </WelcomeContainerButtons>
        </WelcomeContainer>
      </Container>
    </MainContainer>
  );
}
