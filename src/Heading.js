import React from 'react'
import styled from 'styled-components';

//styled components for heading

const OverallHeading = styled.div `
  align-self: center;
  width: 15%
`
const HeadingStyled = styled.h1 `
  font-size: 2.2rem;
`

// This function sets up groundwork for the heading element of the app.



function Heading(){
  return (
  <OverallHeading className='heading'>
    <HeadingStyled>NASA Photo of the Day</HeadingStyled>
  </OverallHeading>
  )
};

export default Heading;