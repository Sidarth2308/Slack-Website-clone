import React from "react";
import {
  Container,
  LeftContainer,
  LeftContainerBottom,
  LeftContainerButtons,
  LeftContainerEmail,
  LeftContainerGoogle,
  LeftContainerGoogleLogo,
  LeftContainerHeading,
  LeftContainerHighlight,
  LeftContainerSubHeading,
  MainContainer,
  RightContainer,
  RightContainerVideo
} from "./styles/hero";
import GoogleLogo from "../../assets/googleLogo.svg";
import heroVideo from "../../assets/hero-product-ui.mp4";
export default function Hero() {
  return (
    <MainContainer>
      <Container>
        <LeftContainer>
          <LeftContainerHeading>
            Great teamwork starts with a{" "}
            <LeftContainerHighlight>digital HQ</LeftContainerHighlight>
          </LeftContainerHeading>
          <LeftContainerSubHeading>
            With all your people, tools and communication in one place, you can
            work faster and more flexibly than ever before.
          </LeftContainerSubHeading>
          <LeftContainerButtons>
            <LeftContainerEmail>SIGN UP WITH EMAIL ADDRESS</LeftContainerEmail>
            <LeftContainerGoogle>
              <LeftContainerGoogleLogo src={GoogleLogo} />
              SIGN UP WITH GOOGLE
            </LeftContainerGoogle>
          </LeftContainerButtons>
          <LeftContainerBottom>
            Slack is free to try for as long as you like
          </LeftContainerBottom>
        </LeftContainer>
        <RightContainer>
          <RightContainerVideo src={heroVideo} autoPlay loop muted />
        </RightContainer>
      </Container>
    </MainContainer>
  );
}
