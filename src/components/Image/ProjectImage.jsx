import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types';
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query Images {
        allFile(filter: {sourceInstanceName: {eq: "images" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    `}
    render={data => {
      const selected = data.allFile.edges.find((n) => n.node.relativePath === filename);
      const image = selected.node.childImageSharp.gatsbyImageData;

      if (!image) return null;

      return (
        <div>
          <GatsbyImage image={image} alt={alt} />
        </div>
      )
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;