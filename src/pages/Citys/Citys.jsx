import './Citys.css';

import { useMediaQuery } from 'react-responsive';
import CitiesList from '../../components/CitiesList/CitiesList';

const Citys = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 880 });

  return (
    <div className="outletContainer">
      {isLargeScreen ? (
        <h2 className="cities-title">
          ¡Ven y consulta nuestras visitas y rutas en ciudades!
        </h2>
      ) : (
        <h2 className="cities-title">Sigue nuestras rutas en ciudades</h2>
      )}

      <div className="spinner"></div>

      {/* <NavLink to="/createCities2">
        <button className="cities-button-create">Crear Ruta</button>
      </NavLink> */}

      <div className="cities-citiesList-container">
        {<CitiesList itemsPerPage={4} />}
      </div>
    </div>
  );
};

export default Citys;
