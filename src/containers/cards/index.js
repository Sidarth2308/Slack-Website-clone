import React from "react";
import {
  CardBottomText,
  CardExtraBox,
  CardFirst,
  CardFirstBottom,
  CardFirstBox,
  CardFirstHeading,
  CardFirstType,
  CardHeading,
  CardImage,
  CardNext,
  CardNextBottom,
  CardNextBox,
  CardNextImage,
  CardsContainer,
  CardType,
  Container,
  Heading,
  MainContainer
} from "./styles/cards";
import cardImg1 from "../../assets/cards1.png";
import cardImg2 from "../../assets/cards2.jpg";
import cardImg3 from "../../assets/cards3.jpg";
import cardImg4 from "../../assets/cards4.jpg";
export default function Cards() {
  return (
    <MainContainer>
      <Container>
        <Heading>Take a deeper dive into a new way to work</Heading>
        <CardsContainer>
          <CardFirst>
            <CardFirstBox>
              <CardFirstType>Collection</CardFirstType>
              <CardFirstHeading>Slack as your digital HQ</CardFirstHeading>
            </CardFirstBox>

            <CardImage src={cardImg1} />
            <CardFirstBottom>
              <CardFirstType>SEE ALL</CardFirstType>
            </CardFirstBottom>
          </CardFirst>

          <CardNext>
            <CardNextImage src={cardImg2} />
            <CardNextBox>
              <CardExtraBox>
                <CardType>Resource</CardType>
                <CardHeading>
                  See how others are building their digital HQ
                </CardHeading>
              </CardExtraBox>

              <CardNextBottom>
                <CardBottomText>READ MORE</CardBottomText>
              </CardNextBottom>
            </CardNextBox>
          </CardNext>

          <CardNext>
            <CardNextImage src={cardImg3} />
            <CardNextBox>
              <CardExtraBox>
                <CardType>Webinar</CardType>
                <CardHeading>
                  Embracing a digital-first approach to work
                </CardHeading>
              </CardExtraBox>

              <CardNextBottom>
                <CardBottomText>WATCH NOW</CardBottomText>
              </CardNextBottom>
            </CardNextBox>
          </CardNext>

          <CardNext>
            <CardNextImage src={cardImg4} />
            <CardNextBox>
              <CardExtraBox>
                <CardType>E-book</CardType>
                <CardHeading>
                  Reinventing work: new imperatives for the future of working
                </CardHeading>
              </CardExtraBox>

              <CardNextBottom>
                <CardBottomText>GET E-BOOK</CardBottomText>
              </CardNextBottom>
            </CardNextBox>
          </CardNext>
        </CardsContainer>
      </Container>
    </MainContainer>
  );
}
