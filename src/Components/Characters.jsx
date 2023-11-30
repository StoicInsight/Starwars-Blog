import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const Characters = () => {
  const [characterList, setCharacterList] = useState([]);

  console.log('character list', characterList);
  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const res = await fetch('https://www.swapi.tech/api/people');
    const data = await res.json();
    setCharacterList(data.results);
  };

  const trackContext = useContext(Context);

  return (
    <section className='container'>
      {characterList.length > 0 ? (
        characterList.map((el, key) => {
          return (
            <div key={key} className='container-item'>
              <img src={`/Characters/${el.name}.jpeg`} alt='' />
              <div className='item-description'>
                <h3>{el.name}</h3>
                <div className='item-buttons'>
                  <Link className='learn' to={`/characters/${el.uid}`}>
                    Learn More
                  </Link>
                  <button
                    className='star'
                    onClick={() => trackContext.addFavorite(el)}
                  >
                    ★
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Characters;
