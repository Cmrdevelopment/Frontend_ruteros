import './CardCity.css';

import { FaMapMarker } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import ReadOnlyCityRating from '../ratings/ReadOnlyCityRating/ReadOnlyCityRating';
import ToggleBtnFollowUser from '../ToggleBtnFollowUser/ToggleBtnFollowUser';

const CardCity = ({ city }) => {
  const navigate = useNavigate();
  const pathById = `/cityDetails`;

  return (
    <section className="city-Info">
      <button
        className="city-card-btn"
        onClick={() =>
          navigate(pathById, {
            state: { id: city._id },
          })
        }
      >
        <img className="city-Info-img" src={city.image} alt={`city's ${city.city} pic`} />
        <div className="">
          <ToggleBtnFollowUser userToFollowId={city._id} />
        </div>
        <div className="">
          {city.city}
          <p className="">
            {' '}
            <FaMapMarker /> Ubicado/a en {city.city}
          </p>
        </div>
        <div className="city-Info-difficulty-descriptionGeneral-routeLocation-valoraciones">
          <p className="city-Info-descriptionGeneral">{city.descriptionGeneral}</p>
          <h3 className="">{city.difficulty}</h3>
          <p className="">{city.routeLocation}</p>
          <div className="">
            {/*--- Este componente hace la media de las estrellas ---*/}
            <ReadOnlyCityRating city={city} />
            <p>({city?.ratings?.length} valoraciones)</p>
          </div>
        </div>
      </button>
    </section>
  );
};

export default CardCity;
