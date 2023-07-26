import './ProfileCity.css';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import CityRoutesCreated from '../../CityRoutesCreated/CityRoutesCreated';
import CityRoutesInterested from '../../CityRoutesInterested/cityRoutesInterested';

const ProfileCity = () => {
  const [showCreated, setShowCreated] = useState(true);

  const handleShowCreated = () => {
    setShowCreated(true);
  };

  const handleShowInterested = () => {
    setShowCreated(false);
  };

  return (
    

    <section className="Offers-Btn-filter">
      
      <button className="btn_profile_general-my-expe" onClick={handleShowCreated}>
        Mis rutas
      </button>
      
      <NavLink to="/createCities2">
        <button className="offer-button-Create">Crear Ruta</button>
      </NavLink>
      
      <button className="btn_profile_general-my-expe" onClick={handleShowInterested}>
        Rutas que sigo
      </button>
      {showCreated ? <CityRoutesCreated /> : <CityRoutesInterested />}
      </section>
  );
};

export default ProfileCity;