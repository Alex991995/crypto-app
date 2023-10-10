import React from 'react';
import millify from 'millify';

interface InfoOfTotalProps {
  text: string;
  total: number;
}

function InfoOfTotal({text, total}:InfoOfTotalProps) {
  return (
    <div >
      <h4 className='title-info'>{text}</h4>
      <span className='title-output'>{millify(total)}</span>
  </div>
  );
}

export default InfoOfTotal;