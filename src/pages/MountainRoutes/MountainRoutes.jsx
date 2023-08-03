import './MountainRoutes.css';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MountainRoutesList from '../../components/MountainRoutesList/MountainRoutesList';

const MountainRoutes = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 880 });

  return (
    <div className="outletContainer">
      {isLargeScreen ? (
        <h2 className="mountainRouteTit">
          ¡Ven y consulta todas nuestras rutas de montaña!
        </h2>
      ) : (
        <h2 className="mountainRouteTit">Sigue nuestras rutas de montaña</h2>
      )}
      {/* <NavLink to="/createMountainRoute2">
        <button className="offer-button-Create">Crear Ruta</button>
      </NavLink> */}
      <div className="spinner"></div>

      {<MountainRoutesList itemsPerPage={4} />}
    </div>
  );
};

export default MountainRoutes;
