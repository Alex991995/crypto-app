import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface dataProps{
  Icon: IconType
  text: string 
  data:  undefined | string | number | ReactNode
}

function CryptoStats({Icon, text, data}:dataProps) {
  return (
    <div className='info-stats bottom-border'>
      <div className='flex'>
          <Icon size='25'/>
          <p className='ml-2'>{text}</p>
      </div>
      <p className='stats-result-crypto'>{data}</p>
    </div>
  );
}

export default CryptoStats;
