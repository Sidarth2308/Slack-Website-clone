import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1030px) {
    flex-direction: column;
  }
  font-family: "Arimo", sans-serif;
  letter-spacing: -0.2px;
  padding-top: 40px;
`;
export const MainContainer = styled.div`
  display: flex;
  width: 100%;

  background-color: #fff;
`;

export const TestimonialHeading = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.8px;
  margin-bottom: 1rem;
  margin-top: 40px;
`;

export const TestimonialDesc = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.4444;
  letter-spacing: normal;
`;

export const TestimonialButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 100px;
  align-items: center;
`;
export const TestimonialEnterprise = styled.div`
  margin-right: 10px;
  background-color: #541554;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
  border: 1px solid white;
  font-weight: 600;
  margin-left: 15px;
  &:hover {
    padding: 19px 39px;
    border: 2px solid white;
  }
  transition: all 0.4s ease;
  font-size: 0.9375rem;
`;
export const TestimonialSales = styled.div`
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
  &:hover {
    border: 2px solid #541554;
    padding: 19px 39px;
  }
  transition: all 0.4s ease;
`;

export const TestimonialInfoBox = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

export const TestimonialInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 67%;
  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

export const TestimonialInfo = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 180px;
`;

export const TestimonialInfoNumber = styled.div`
  color: #611f69;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: normal;
  white-space: nowrap;
  display: inline-block;
  margin-bottom: 0.25rem;
`;
export const TestimonialInfoDesc = styled.div`
  font-size: 1rem;
  line-height: 1.4286;
  letter-spacing: normal;
  font-weight: 700;
`;

export const TestimonialExtra = styled.div`
  display: flex;
  /* align-items: center; */
  margin-top: 100px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  width: 100%;
`;
export const TestimonialExtraLeftPlay = styled.img`
  position: absolute;
  border-radius: 5px;
  background-color: rgb(54, 197, 240);
  top: 40%;
  left: 45%;
`;
export const TestimonialExtraLeft = styled.div`
  border-top-right-radius: 500px;
  border-bottom-right-radius: 500px;
  display: flex;
  position: relative;
  flex: 12;
  width: 100%;
  cursor: pointer;
  height: 100%;
  &:hover ${TestimonialExtraLeftPlay} {
    background-color: #1264a3;
  }
  @media (max-width: 1020px) {
    padding: 0;
    flex: 1;
  }
`;

export const TestimonialExtraLeftVideo = styled.video`
  height: 100%;
  max-height: 600px;
  max-width: 100%;
  border-top-right-radius: 500px;
  border-bottom-right-radius: 500px;
`;

export const TestimonialExtraRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 11;
  width: 100%;
  padding: 20px 30px;
  padding-left: 50px;
  box-sizing: border-box;
  @media (max-width: 1020px) {
    padding: 0;
    flex: 1;
    width: 100%;
    padding: 10px;
  }
`;
export const TestimonialRightDesc = styled.div`
  font-weight: 400;
  line-height: 1.364;
  letter-spacing: -0.3px;
  margin-top: 0;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-style: italic;
`;
export const TestimonialReviewer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TestimonialReviewerName = styled.div`
  font-weight: 700;
  color: black;
`;
export const TestimonialReviewerInfo = styled.div`
  color: black;
`;
export const TestimonialLinkContainer = styled.div`
  margin-top: 20px;
`;
export const TestimonialLink = styled.div`
  display: inline-block;
  cursor: pointer;
  color: #1264a3;
  border-bottom-color: #1264a3;
  border-bottom-width: 2px;
  outline: 0;
  font-weight: 400;
  line-height: 1.4444;
  letter-spacing: normal;
  font-size: 1.125rem;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #1264a3;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const TestimonialBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: rgb(105, 105, 105);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.2857;
  letter-spacing: normal;
  margin-bottom: 1rem;
  margin-top: 50px;
`;
