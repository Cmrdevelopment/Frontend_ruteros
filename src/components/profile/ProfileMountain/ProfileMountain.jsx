import './ProfileMountain.css';

import React, { useState } from 'react';

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
      <button className="btn_profile_general-my-expe" onClick={handleShowCreated}>
        Mis rutas
      </button>
      <button className="btn_profile_general-my-expe" onClick={handleShowInterested}>
        Rutas que sigo
      </button>
      {showCreated ? <MountainRoutesCreated /> : <MountainRoutesInterested />}
    </section>
  );
};

export default ProfileMountain;
