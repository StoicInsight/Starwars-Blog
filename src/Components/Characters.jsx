import React, { useState, useEffect } from 'react';

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

  return (
    <section className='container'>
      {characterList.map((el, key) => {
        return (
          <div key={key} className='container-items'>
            <img src={`/Characters/${el.name}.jpeg`} alt='' />
            {el.name}
          </div>
        );
      })}
    </section>
  );
};

export default Characters;
