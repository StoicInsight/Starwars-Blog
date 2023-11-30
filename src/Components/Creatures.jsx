import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import Loader from './Loader';

const Creatures = () => {
  const [creaturesList, setCreaturesList] = useState([]);

  useEffect(() => {
    getCreatures();
  }, []);

  const getCreatures = async () => {
    const res = await fetch('https://www.swapi.tech/api/species');
    const data = await res.json();

    setCreaturesList(data.results);
  };

  const trackContext = useContext(Context);

  return (
    <section className='container'>
      {creaturesList.length > 0 ? (
        creaturesList.map((el, key) => {
          return (
            <div key={key} className='container-item'>
              <img src={`/Creatures/${el.name}.jpeg`} alt='' />
              <div className='item-description'>
                <h3>{el.name}</h3>
                <div className='item-buttons'>
                  <Link className='learn' to={`/species/${el.uid}`}>
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

export default Creatures;
