import React from "react";
import {
  Container,
  ExtraInfoBox,
  InfoBox,
  InfoCompanies,
  InfoCompany,
  InfoText,
  InfoTextBox,
  InfoTextBoxContainer,
  InfoTextDesc,
  InfoTextHeading,
  InfoTextLink,
  InfoTextLinkBox,
  InfoVideo,
  InfoVideoBox,
  MainContainer
} from "./styles/workInfo";
import seekLogo from "../../assets/seekLogo.png";
import xeroLogo from "../../assets/xeroLogo.png";
import reaLogo from "../../assets/reaLogo.png";
import rmitLogo from "../../assets/rmitLogo.png";
import ibmLogo from "../../assets/ibmLogo.png";
import deliverooLogo from "../../assets/deliverooLogo.png";
import infoVideo1 from "../../assets/infoVid1.mp4";
import infoVideo2 from "../../assets/infoVid2.mp4";
import infoVideo3 from "../../assets/infoVid3.mp4";

export default function WorkInfo() {
  return (
    <MainContainer>
      <Container>
        <InfoText>TRUSTED BY COMPANIES ALL OVER THE WORLD</InfoText>
        <InfoCompanies>
          <InfoCompany src={seekLogo} height="40px" />
          <InfoCompany src={xeroLogo} height="49px" />
          <InfoCompany src={reaLogo} height="40px" />
          <InfoCompany src={rmitLogo} height="40px" />
          <InfoCompany src={ibmLogo} height="58px" />
          <InfoCompany src={deliverooLogo} height="36px" />
        </InfoCompanies>
        <ExtraInfoBox>
          <InfoBox>
            <InfoVideoBox>
              <InfoVideo src={infoVideo1} loop autoPlay muted />
            </InfoVideoBox>
            <InfoTextBoxContainer>
              <InfoTextBox>
                <InfoTextHeading> Bring your team together</InfoTextHeading>
                <InfoTextDesc>
                  At the heart of Slack are channels: organised spaces for
                  everyone and everything that you need for work. In channels,
                  it’s easier to connect across departments, offices, time zones
                  and even other companies.
                </InfoTextDesc>
                <InfoTextLinkBox>
                  <InfoTextLink>Learn more about channels</InfoTextLink>
                </InfoTextLinkBox>
              </InfoTextBox>
            </InfoTextBoxContainer>
          </InfoBox>
          <InfoBox rowReverse>
            <InfoVideoBox>
              <InfoVideo src={infoVideo2} loop autoPlay muted />
            </InfoVideoBox>
            <InfoTextBoxContainer toLeft>
              <InfoTextBox>
                <InfoTextHeading> Choose how you want to work</InfoTextHeading>
                <InfoTextDesc>
                  In Slack, you’ve got all the flexibility to work when, where
                  and how it’s best for you. You can easily chat, send audio and
                  video clips, or join a huddle to talk things through live.
                </InfoTextDesc>
                <InfoTextLinkBox>
                  <InfoTextLink>
                    Learn more about flexible communication
                  </InfoTextLink>
                </InfoTextLinkBox>
              </InfoTextBox>
            </InfoTextBoxContainer>
          </InfoBox>
          <InfoBox>
            <InfoVideoBox>
              <InfoVideo src={infoVideo3} loop autoPlay muted />
            </InfoVideoBox>
            <InfoTextBoxContainer>
              <InfoTextBox>
                <InfoTextHeading>
                  Move faster with your tools in one place
                </InfoTextHeading>
                <InfoTextDesc>
                  With your other work apps connected to Slack, you can work
                  faster by switching tabs less. And with powerful tools like
                  Workflow Builder, you can automate away routine tasks.
                </InfoTextDesc>
                <InfoTextLinkBox>
                  <InfoTextLink>Learn more about Slack platform</InfoTextLink>
                </InfoTextLinkBox>
              </InfoTextBox>
            </InfoTextBoxContainer>
          </InfoBox>
        </ExtraInfoBox>
      </Container>
    </MainContainer>
  );
}
