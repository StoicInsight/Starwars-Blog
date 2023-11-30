import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import { Link } from 'react-router-dom';

const Locations = () => {
  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    getLocations();
  }, []);

  const trackContext = useContext(Context);

  const getLocations = async () => {
    const res = await fetch('https://www.swapi.tech/api/planets');
    const data = await res.json();

    setLocationList(data.results);
  };

  return (
    <section className='container'>
      {locationList.map((el, key) => {
        return (
          <div key={key} className='container-item'>
            <img src={`/Planets/${el.name}.jpeg`} alt='' />
            <div className='item-description'>
              <h3>{el.name}</h3>
              <div className='item-buttons'>
                <Link className='learn' to={`/planets/${el.uid}`}>
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
      })}
    </section>
  );
};

export default Locations;
