import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  &, & a {
    font-size: 14px;
    text-align: center;
    padding: 8px 0;
  }
  & a {
    font-weight: bold;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Footer = () => <StyledFooter>Made in haste by <a href="https://twitter.com/delster2">David Elster</a>.</StyledFooter>
export default Footer