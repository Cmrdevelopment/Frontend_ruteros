import './ProfileMountain.css';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MountainRoutesCreated from '../../mountainRoutesCreated/mountainRoutesCreated';
import MountainRoutesInterested from '../../MountainRoutesInterested/mountainRoutesInterested';

const ProfileMountain = () => {
  const [showCreated, setShowCreated] = useState(true);

  const handleShowCreated = () => {
    setShowCreated(true);
  };

  const handleShowInterested = () => {
    setShowCreated(false);
  };

  return (
    <section className="Offers-Btn-filter">
      <div className="profileMountain-btns">
        <button className="btn_profile_general" onClick={handleShowCreated}>
          Mis rutas
        </button>

        <NavLink to="/createMountainRoute2">
          <button className="btn_profile_general">Crear Ruta</button>
        </NavLink>

        <button className="btn_profile_general" onClick={handleShowInterested}>
          Rutas que sigo
        </button>
      </div>

      {showCreated ? <MountainRoutesCreated /> : <MountainRoutesInterested />}
    </section>
  );
};

export default ProfileMountain;
