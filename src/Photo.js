import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2 `
  font-size: 2.2rem;
`
const PhotoCardDiv = styled.div `
  display: flex;
`
const PhotoSec = styled.img `
  width: 50%;
  padding-left: 20px;
`
const DescSec = styled.p `
  width: 50%;
  font-size: 1.2rem;
  align-self: center;
  padding-left: 20px;
  padding-right: 20px;
`

// this function sets up groundwork for the image element
function Photo(props) {
  return (
    <div className='content'>
      <StyledTitle className='title'>{props.title}</StyledTitle>
      <PhotoCardDiv className='photo-card'>
        <PhotoSec className='image' src={props.url}/>
        <DescSec className='desc'>{props.desc}</DescSec>
      </PhotoCardDiv>
    </div>
  )
};

export default Photo;