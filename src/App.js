import React from "react";
import { Router, Link } from "react-static";
import styled, { injectGlobal } from "styled-components";
import Routes from "react-static-routes";

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }

  nav {
    width: 100%;
    background: mintcream;

    a {
      color: midnightblue;
      padding: 1rem;
      display: inline-block;
    }
  }

  h1 {
    color: midnightblue;
  }

  .content {
    padding: 1rem;
  }
`;

export default () => (
  <Router>
    <AppStyles>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
);
