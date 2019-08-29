import React, { useState } from 'react';

// this function sets up groundwork for the image element
function Photo(props) {
  console.log(props)
  return (
    <div className='content'>
      <h2 className='title'>{props.title}</h2>
      <div className='photo-card'>
        <img className='image' src={props.url}/>
        <p className='desc'>{props.desc}</p>
      </div>
    </div>
  )
};

export default Photo;