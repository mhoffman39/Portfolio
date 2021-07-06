import React from 'react';
import Fade from 'react-reveal/Fade';

const Title = ({ title }) => (
  <Fade bottom duration={4000} delay={1300} distance="50px">
    <h2 className="section-title">{title}</h2>
  </Fade>
);

export default Title;
