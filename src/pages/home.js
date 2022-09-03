import React from "react";
import styled from "styled-components/macro";
import Header from "../containers/header";
import Hero from "../containers/hero";
import WorkInfo from "../containers/workInfo";
import Testimonial from "../containers/testimonial";
import Footer from "../containers/footer";
import PreFooter from "../containers/preFooter";
import Cards from "../containers/cards";
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <WorkInfo />
      <Testimonial />
      <Cards />
      <PreFooter />
      <Footer />
    </Container>
  );
}
