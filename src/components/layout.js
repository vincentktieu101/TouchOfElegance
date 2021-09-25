/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Container from "@material-ui/core/Container";

import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>{children}</div>
      <div id="footer">
        <Container>
          <div className="footer-content fade-in">
            <h4>© TOUCH OF ELEGANCE {new Date().getFullYear()}</h4>
            <div>
              <br />
            </div>
            <div>1846 Westwood Boulevard</div>
            <div>Los Angeles, California 90025</div>
            <div>United States</div>
          </div>
        </Container>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
