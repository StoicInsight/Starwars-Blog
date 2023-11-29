import React, { useState, useEffect } from 'react';

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

  return (
    <section className='container'>
      {creaturesList.map((el, key) => {
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

export default Creatures;
