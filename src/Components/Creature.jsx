import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const Creature = () => {
  const [creature, setCreature] = useState(null);
  const param = useParams();

  useEffect(() => {
    getCreature();
  }, []);

  const getCreature = async () => {
    const res = await fetch(
      `https://www.swapi.tech/api/species/${param.speciesId}`
    );
    const data = await res.json();

    setCreature(data.result);
  };

  return (
    <section className='character-section'>
      {creature ? (
        <>
          <div className='character-img'>
            <img src={`/Creatures/${creature.properties.name}.jpeg`} alt='' />
            <div className='character-name'>
              <h1>{creature.properties.name}</h1>
              <p>{creature.description}</p>
            </div>
          </div>

          <div className='about-character'>
            <div>
              <h5>Average height</h5>
              <p>{creature.properties.average_height}</p>
            </div>

            <div>
              <h5>Lifespan</h5>
              <p>{creature.properties.average_lifespan}</p>
            </div>

            <div>
              <h5>Language</h5>
              <p>{creature.properties.language}</p>
            </div>
            <div>
              <h5>Classification</h5>
              <p>{creature.properties.classification}</p>
            </div>
            <div>
              <h5>Designation</h5>
              <p>{creature.properties.designation}</p>
            </div>
            <div>
              <h5>Name</h5>
              <p>{creature.properties.name}</p>
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
