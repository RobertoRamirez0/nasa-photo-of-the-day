import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div `
  padding-top: 20px;
  font-size: 1.2rem;
`
const StyledLink = styled.a `
  color: white;
`

// This function takes care of thr footer element

function Footer(props){
  const copy = '\u00A9';
  return (
    <FooterDiv className='footer'>
      <p>{copy} 2019 Roberto Ramirez</p>
      <p>Data provided by <StyledLink href='https://apod.nasa.gov/apod/astropix.html'>NASA</StyledLink></p>
    </FooterDiv>
  )
};

export default Footer;