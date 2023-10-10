import React from 'react';
import { useParams } from 'react-router-dom';

function CryptoDetails() {
  const {uuid} = useParams()


  return (
    <div>
      {uuid}
    </div>
  );
}

export default CryptoDetails;