import React from 'react';

// This function takes care of thr footer element

function Footer(){
  const copy = '\u00A9';
  return (
    <div className='footer'>
      <p>{copy} 2019 Roberto Ramirez</p>
      <p>Data provided by NASA</p>
    </div>
  )
};

export default Footer;