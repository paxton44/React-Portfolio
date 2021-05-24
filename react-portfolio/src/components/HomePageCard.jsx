import React from "react";
import AboutMe from "./AboutMe";
import HomePageCarousel from './HomePageCarousel';
import { Container } from "react-bootstrap";


const HomePageCard = () => {
  return (
   <Container>
   <AboutMe />,
   <HomePageCarousel />
   </Container>
  );
};

export default HomePageCard;