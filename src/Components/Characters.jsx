import React, { useState, useEffect } from 'react';

const characterImages = [
  {
    character: 'Luke Skywalker',
    image: '/Luke.webp',
  },
];

const Characters = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const res = await fetch('https://www.swapi.tech/api/people');
    const data = await res.json();

    console.log(data);
    setCharacterList(data.results);
  };

  const getImage = (name) => {
    characterImages.filter((char) => {
      if (char.character === name) {
        return char.image;
      } else return 'No Image';
    });
  };

  console.log('Image', getImage('Luke Skywalker'));

  // console.log(getImage);

  console.log(typeof characterList);

  return (
    <div className='characters'>
      {characterList.map((el, key) => {
        return (
          <div key={key} className='character'>
            <img src={`${el.name}.jpeg`} alt='' />
            {el.name}
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
