import React, { useState, useEffect } from 'react';

const Vehicles = () => {
  const [vehiclesList, setVehiclesList] = useState([]);

  useEffect(() => {
    getVehicles();
  }, []);

  const getVehicles = async () => {
    const res = await fetch('https://www.swapi.tech/api/starships');
    const data = await res.json();

    console.log(data);
    setVehiclesList(data.results);
  };

  return (
    <section className='container'>
      {vehiclesList.map((el, key) => {
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

export default Vehicles;
