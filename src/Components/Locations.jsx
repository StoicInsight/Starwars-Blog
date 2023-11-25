import React, { useState, useEffect } from 'react';

const Locations = () => {
  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    getLocations();
  }, []);

  console.log('Locations', locationList);

  const getLocations = async () => {
    const res = await fetch('https://www.swapi.tech/api/planets');
    const data = await res.json();

    setLocationList(data.results);
  };

  return (
    <section className='container'>
      {locationList.map((el, key) => {
        return (
          <div key={key} className='container-items'>
            <img src={`/Planets/${el.name}.jpeg`} alt='' />
            {el.name}
          </div>
        );
      })}
    </section>
  );
};

export default Locations;
