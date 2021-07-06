import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

const AboutImg = () => (
  <StaticImage
    alt="Mason's Profile Photo"
    src="../../images/profile.jpeg"
    layout="constrained"
    height={500}
  />
);

export default AboutImg;