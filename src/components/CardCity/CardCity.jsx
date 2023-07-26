import './CardCity.css';

import { FcClock } from 'react-icons/fc';
// import { FaMapMarker } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import ReadOnlyCityRating from '../ratings/ReadOnlyCityRating/ReadOnlyCityRating';
import ToggleBtnFollowCity from '../ToggleBtnFollowCity/ToggleBtnFollowCity';

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
        <div className="city-Info-img-valoraciones">
          <img
            className="city-Info-img"
            src={city.image}
            alt={`city's ${city.city} pic`}
          />
          <div>
            {/*--- Este componente hace la media de las estrellas ---*/}
            <ReadOnlyCityRating city={city} />
            <p>({city?.ratings?.length} valoraciones)</p>
            {city.city}
          </div>
        </div>
        <div className="city-Info-toda_la_carta">
          <div className="city-Info-routeName-descriptionGeneral">
            <div>
              <h4 className="city-Info-name">{city.routeName}</h4>
              <p className="city-Info-descriptionGeneral">{city.descriptionGeneral}</p>
            </div>
            <div>
              <div className="city_ToggleBtnFollowUser">
                <ToggleBtnFollowCity cityToFollowId={city._id} />
              </div>
            </div>
          </div>
          <div className="city-Info-routeState-routeDistance-routeDuration">
            <p className="">{city.routeState}</p>
            <p className="city-Info-distance">{city.routeDistance} km</p>
            <p className="city-Info-routeDuration">
              {' '}
              <FcClock />
              {city.routeDuration} Horas
            </p>
            <p className="">{city.difficulty}</p>
            <p className="">
              {' '}
              <FcClock /> {city.routeLocation}
            </p>
          </div>
        </div>
      </button>
    </section>
  );
};

export default CardCity;
