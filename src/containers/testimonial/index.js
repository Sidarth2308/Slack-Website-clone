import React from "react";
import {
  Container,
  MainContainer,
  TestimonialBottom,
  TestimonialButtons,
  TestimonialDesc,
  TestimonialEnterprise,
  TestimonialExtra,
  TestimonialExtraLeft,
  TestimonialExtraLeftPlay,
  TestimonialExtraLeftVideo,
  TestimonialExtraRight,
  TestimonialHeading,
  TestimonialInfo,
  TestimonialInfoBox,
  TestimonialInfoContainer,
  TestimonialInfoDesc,
  TestimonialInfoNumber,
  TestimonialLink,
  TestimonialLinkContainer,
  TestimonialReviewer,
  TestimonialReviewerInfo,
  TestimonialReviewerName,
  TestimonialRightDesc,
  TestimonialSales
} from "./styles/testimonial";
import previewVideo from "../../assets/youtubeVid.mp4";
import playButton from "../../assets/playButton.svg";
export default function Testimonial() {
  return (
    <MainContainer>
      <Container>
        <TestimonialHeading>
          Teams large and small rely on Slack
        </TestimonialHeading>
        <TestimonialDesc>
          Slack securely scales up to support collaboration at the world’s
          biggest companies.
        </TestimonialDesc>
        <TestimonialButtons>
          <TestimonialEnterprise>
            MEET SLACK FOR ENTERPRISE
          </TestimonialEnterprise>
          <TestimonialSales>TALK TO SALES</TestimonialSales>
        </TestimonialButtons>
        <TestimonialInfoBox>
          <TestimonialInfoContainer>
            <TestimonialInfo>
              <TestimonialInfoNumber>85%</TestimonialInfoNumber>
              <TestimonialInfoDesc>
                of users say that Slack has improved communication*
              </TestimonialInfoDesc>
            </TestimonialInfo>
            <TestimonialInfo>
              <TestimonialInfoNumber>86%</TestimonialInfoNumber>
              <TestimonialInfoDesc>
                feel that their ability to work remotely has improved*
              </TestimonialInfoDesc>
            </TestimonialInfo>
            <TestimonialInfo>
              <TestimonialInfoNumber>88%</TestimonialInfoNumber>
              <TestimonialInfoDesc>
                feel more connected to their teams*
              </TestimonialInfoDesc>
            </TestimonialInfo>
          </TestimonialInfoContainer>
        </TestimonialInfoBox>
        <TestimonialExtra>
          <TestimonialExtraLeft>
            <TestimonialExtraLeftVideo src={previewVideo} autoPlay muted loop />
            <TestimonialExtraLeftPlay src={playButton} />
          </TestimonialExtraLeft>
          <TestimonialExtraRight>
            <TestimonialRightDesc>
              ‘We were able to create a large virtual network of employees that
              can communicate as though they are together. There was a lot of
              disruption in terms of where we worked, but in terms of how we
              worked – very little disruption.’
            </TestimonialRightDesc>
            <TestimonialReviewer>
              <TestimonialReviewerName>Mark Smith</TestimonialReviewerName>
              <TestimonialReviewerInfo>
                Senior Technical Product Manager, T-Mobile
              </TestimonialReviewerInfo>
              <TestimonialLinkContainer>
                <TestimonialLink> See more customer stories</TestimonialLink>
              </TestimonialLinkContainer>
            </TestimonialReviewer>
          </TestimonialExtraRight>
        </TestimonialExtra>
        <TestimonialBottom>
          * Weighted average. Based on 2,707 survey responses from weekly Slack
          users in the US, UK, Australia and Canada with a ± 2% margin of error
          at 95% CI (December 2021).
        </TestimonialBottom>
      </Container>
    </MainContainer>
  );
}
