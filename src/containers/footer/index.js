import React from "react";
import {
  Container,
  ExtraInfo,
  ExtraInfoDark,
  ExtraInfoText,
  FooterInfo,
  Link,
  LinksContainer,
  LinksHeading,
  Logo,
  LogoContainer,
  MainContainer,
  TopContainer
} from "./styles/footer";
import logo from "../../assets/logoShort.svg";
export default function Footer() {
  return (
    <MainContainer>
      <Container>
        <TopContainer>
          <LogoContainer>
            <Logo src={logo} />
          </LogoContainer>
          <LinksContainer>
            <LinksHeading>WHY SLACK?</LinksHeading>
            <Link>Slack vs email</Link>
            <Link>Channels</Link>
            <Link>Engagement</Link>
            <Link>Scale</Link>
            <Link>Watch the demo</Link>
          </LinksContainer>
          <LinksContainer>
            <LinksHeading>PRODUCT</LinksHeading>
            <Link>Features</Link>
            <Link>Integrations</Link>
            <Link>Enterprise</Link>
            <Link>Solutions</Link>
          </LinksContainer>
          <LinksContainer>
            <LinksHeading>Pricing</LinksHeading>
            <Link>Subscriptions</Link>
            <Link>Paid vs free</Link>
          </LinksContainer>
          <LinksContainer>
            <LinksHeading>Resources</LinksHeading>
            <Link>Partners</Link>
            <Link>Developers</Link>
            <Link>Community</Link>
            <Link>Apps</Link>
            <Link>Blog</Link>
            <Link>Help Centre</Link>
            <Link>Events</Link>
          </LinksContainer>
          <LinksContainer>
            <LinksHeading>Company</LinksHeading>
            <Link>About us</Link>
            <Link>Leadership</Link>
            <Link>Investor relations</Link>
            <Link>News</Link>
            <Link>Media kit</Link>
            <Link>Careers</Link>
          </LinksContainer>
        </TopContainer>
        <ExtraInfo>
          <ExtraInfoDark>
            <ExtraInfoText>Status</ExtraInfoText>
            <ExtraInfoText>Privacy</ExtraInfoText>
            <ExtraInfoText>Terms</ExtraInfoText>
            <ExtraInfoText>Cookie preferences</ExtraInfoText>
            <ExtraInfoText>Contact us</ExtraInfoText>
            <ExtraInfoText>Change region</ExtraInfoText>
          </ExtraInfoDark>
        </ExtraInfo>
        <FooterInfo>
          ©2022 Slack Technologies, LLC, a Salesforce company. All rights
          reserved. Various trademarks held by their respective owners.
        </FooterInfo>
      </Container>
    </MainContainer>
  );
}
