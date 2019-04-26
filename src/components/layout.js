import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"

import "normalize.css"
import "typeface-open-sans"

import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
  }
  body {
    background: #f0f0f0;
  }
  h1,h2,h3,h4,h5,h6,p {
    color: rgb(0,0,0,.7);
  }
`

const App = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;

  & main {
    flex: 1 1 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Layout = ({ children }) => (
  <App>
    <GlobalStyle />
    <Header />
    <main><div>{children}</div></main>
    <Footer />
  </App>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
