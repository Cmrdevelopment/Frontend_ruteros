import './MountainRoutesCreated2.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/authContext';
import { updateCity } from '../../services/API_proyect/city.service';
import { getUserById } from '../../services/API_proyect/user.service';
import DeleteCityRouteButton from '../DeleteCityRoute/DeleteCityRoute';

const MountainRoutesCreated2 = () => {
  const [CityRoute, setCityRoutes] = useState([]);
  const { user } = useAuth();

  const handleCityRouteStateChange = async (cityRouteId, newCityRouteState) => {
    try {
      const formData = new FormData();
      formData.append('cityRouteState', newCityRouteState);
      await updateCity(cityRouteId, formData);
      setCityRoutes(
        CityRoute.map((city) => {
          if (city._id === cityRouteId) {
            return {
              ...CityRoute,
              cityRouteState: newCityRouteState,
            };
          }
          return CityRoute;
        }),
      );
    } catch (error) {
      console.error('Error al cambiar el estado de la ruta de ciudad:', error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userCityRoute = await getUserById(user._id);

        console.log(userCityRoute);
        if (userCityRoute) {
          setCityRoutes(userCityRoute.data.cityRoutesCreated);
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
      {CityRoute.length > 0 ? (
        <ul>
          {CityRoute.map((CityRoute) => (
            <li key={CityRoute._id}>
              <h3>{CityRoute.routeName}</h3>
              <p>Descripción: {CityRoute.descriptionGeneral}</p>
              <p>Localización: {CityRoute.routeLocation}</p>
              <p>Dificultad: {CityRoute.difficulty}</p>
              <p>
                Estado de la ruta:
                <select
                  className="select-offer-change-state"
                  value={CityRoute.routeState}
                  onChange={(e) =>
                    handleCityRouteStateChange(CityRoute._id, e.target.value)
                  }
                >
                  <option value="Close">Close</option>
                  <option value="Suspended">Suspended</option>
                  <option value="Open">Open</option>
                </select>
              </p>
              {/* <p>Equipo recomendado: {mountainRoute.itemsToCarry.join(', ')}</p> */}
              <DeleteCityRouteButton
                id={CityRoute._id}
                CityRoute={CityRoute}
                setCityRoutes={setCityRoutes}
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
