import React from 'react';
import { useParams } from 'react-router-dom';

const Character = () => {
  const param = useParams();
  console.log(param);

  return <div>Character</div>;
};

export default Character;
