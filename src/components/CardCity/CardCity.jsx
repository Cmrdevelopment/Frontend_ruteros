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
      <div className="developer-Info-Toggle-Heart">
        <ToggleBtnFollowUser userToFollowId={city._id} />
      </div>
      <button
        className="developer-card-btn"
        onClick={() =>
          navigate(pathById, {
            state: { id: city._id },
          })
        }
      >
        <img
          className="developer-Info-img"
          src={city.image}
          alt={`city's ${city.city} pic`}
        />

        <div className="developer-Info-tabla-name">
          {city.city}
          <p className="developer-Info-Ubicado">
            {' '}
            <FaMapMarker /> Ubicado/a en {city.city}
          </p>
        </div>
        <h3 className="developer-Info-Rol">{city.difficulty}</h3>
        <p className="developer-Info-Rol">{city.descriptionGeneral}</p>
        <p className="developer-Info-Rol">{city.routeLocation}</p>
      </button>

      <div className="developer-Info-ratingsByOthers">
        {/*--- Este componente hace la media de las estrellas ---*/}
        {/* <ReadOnlyUserRating user={city} /> */}
        <ReadOnlyCityRating city={city} />
        <p>({city?.ratings?.length} valoraciones)</p>
      </div>

      {/* Removed  because dosn´t look ok when the number of technologies is too long*/}
      {/* <div className="developer-Info-grupo-technologies">
        <h4 className="developer-Info-technologies">{developer.technologies}</h4>
      </div> */}
    </section>
  );
};

export default CardCity;
