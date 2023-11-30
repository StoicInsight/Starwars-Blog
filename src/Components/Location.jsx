import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const Creature = () => {
  const [location, setLocation] = useState(null);
  const param = useParams();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const res = await fetch(
      `https://www.swapi.tech/api/planets/${param.planetId}`
    );
    const data = await res.json();

    setLocation(data.result);
  };

  return (
    <section className='character-section'>
      {location ? (
        <>
          <div className='character-img'>
            <img src={`/Planets/${location.properties.name}.jpeg`} alt='' />
            <div className='character-name'>
              <h1>{location.properties.name}</h1>
              <p>{location.description}</p>
            </div>
          </div>

          <div className='about-character'>
            <div>
              <h5>Climate</h5>
              <p>{location.properties.climate}</p>
            </div>

            <div>
              <h5>Diameter</h5>
              <p>{location.properties.diameter}</p>
            </div>

            <div>
              <h5>Gravity</h5>
              <p>{location.properties.gravity}</p>
            </div>
            <div>
              <h5>Population</h5>
              <p>{location.properties.population}</p>
            </div>
            <div>
              <h5>Terrain</h5>
              <p>{location.properties.terrain}</p>
            </div>
            <div>
              <h5>Orbital Period</h5>
              <p>{location.properties.orbital_period}</p>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Creature;
