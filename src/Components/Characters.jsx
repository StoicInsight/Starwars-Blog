import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Characters = () => {
  const [characterList, setCharacterList] = useState([]);
  let favorite = true;

  useEffect(() => {
    getCharacters();
  }, []);

  console.log('Characters', characterList);

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
          <div key={key} className='container-item'>
            <img src={`/Characters/${el.name}.jpeg`} alt='' />
            <div className='item-description'>
              <h3>{el.name}</h3>
              <div className='item-buttons'>
                <Link
                  className='learn'
                  to={`/Chararacters/Character/${el.uid}`}
                >
                  Learn More
                </Link>
                <button className='star'> ★</button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Characters;
