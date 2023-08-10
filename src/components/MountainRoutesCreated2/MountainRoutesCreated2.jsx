import './MountainRoutesCreated2.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/authContext';
import { updateMountain } from '../../services/API_proyect/city.service';
import { getUserById } from '../../services/API_proyect/user.service';
import DeleteMountainRouteButton from '../DeleteCityRoute/DeleteCityRoute';

const MountainRoutesCreated2 = () => {
  const [MountainRoute, setMountainRoutes] = useState([]);
  const { user } = useAuth();

  const handleMountainRouteStateChange = async (
    mountainRouteId,
    newMountainRouteState,
  ) => {
    try {
      const formData = new FormData();
      formData.append('mountainRouteState', newMountainRouteState);
      await updateMountain(mountainRouteId, formData);
      setMountainRoutes(
        MountainRoute.map((mountain) => {
          if (mountain._id === mountainRouteId) {
            return {
              ...MountainRoute,
              mountainRouteState: newMountainRouteState,
            };
          }
          return MountainRoute;
        }),
      );
    } catch (error) {
      console.error('Error al cambiar el estado de la ruta de ciudad:', error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userMountainRoute = await getUserById(user._id);

        console.log(userMountainRoute);
        if (userMountainRoute) {
          setMountainRoutes(userMountainRoute.data.cityRoutesCreated);
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <section className="offer-create-container_general experience-p-container_general">
      <h3>Rutas Creadas</h3>
      {MountainRoute.length > 0 ? (
        <ul>
          {MountainRoute.map((MountainRoute) => (
            <li key={MountainRoute._id}>
              <h3>{MountainRoute.routeName}</h3>
              <p>Descripción: {MountainRoute.descriptionGeneral}</p>
              <p>Localización: {MountainRoute.routeLocation}</p>
              <p>Dificultad: {MountainRoute.difficulty}</p>
              <p>
                Estado de la ruta:
                <select
                  className="select-offer-change-state"
                  value={MountainRoute.routeState}
                  onChange={(e) =>
                    handleMountainRouteStateChange(MountainRoute._id, e.target.value)
                  }
                >
                  <option value="Close">Close</option>
                  <option value="Suspended">Suspended</option>
                  <option value="Open">Open</option>
                </select>
              </p>
              {/* <p>Equipo recomendado: {mountainRoute.itemsToCarry.join(', ')}</p> */}
              <DeleteMountainRouteButton
                id={MountainRoute._id}
                MountainRoute={MountainRoute}
                setMountainRoutes={setMountainRoutes}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="offer-create-container_general_no_ofertas">No hay rutas creadas.</p>
      )}
    </section>
  );
};

export default MountainRoutesCreated2;
