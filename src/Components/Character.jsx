import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const Character = () => {
  const [character, setCharacter] = useState(null);
  const param = useParams();

  console.log('Character', character);

  useEffect(() => {
    setTimeout(() => {
      getCharacter();
    }, 1000);
  }, []);

  const getCharacter = async () => {
    const res = await fetch(
      `https://www.swapi.tech/api/people/${param.characterId}`
    );
    const data = await res.json();

    setCharacter(data.result);
  };

  return (
    <section className='character-section'>
      {character ? (
        <>
          <div className='character-img'>
            <img src={`/Characters/${character.properties.name}.jpeg`} alt='' />
            <div className='character-name'>
              <h1>{character.properties.name}</h1>
              <p>{character.description}</p>
            </div>
          </div>

          <div className='about-character'>
            <div>
              <h5>Birth Year</h5>
              <p>{character.properties.birth_year}</p>
            </div>

            <div>
              <h5>Eye Color</h5>
              <p>{character.properties.eye_color}</p>
            </div>

            <div>
              <h5>Height</h5>
              <p>{character.properties.height}</p>
            </div>
            <div>
              <h5>Hair Color</h5>
              <p>{character.properties.hair_color}</p>
            </div>
            <div>
              <h5>Mass</h5>
              <p>{character.properties.mass}</p>
            </div>
            <div>
              <h5>Gender</h5>
              <p>{character.properties.gender}</p>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Character;
