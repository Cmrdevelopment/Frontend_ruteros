import './CardMountainRoute2.css';

import { FcAddRow, FcClock, FcDepartment, FcEditImage } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

import ReadOnlyMountainRouteRating from '../ratings/ReadOnlyMountainRouteRating/ReadOnlyMountainRouteRating';
import ToggleBtnFollowMountainRoute from '../ToggleBtnFollowMountainRoute/ToggleBtnFollowMountainRoute';

const CardMountainRoute2 = ({ mountainRoute }) => {
  const navigate = useNavigate();
  const pathById = `/mountainRouteDetails`;

  return (
    <section className="mountainRoute-Info">
      <div className="mountainRoute_ToggleBtnFollowMontainRoute">
        <ToggleBtnFollowMountainRoute mountainRouteToFollowId={mountainRoute._id} />
      </div>
      <button
        className="mountainRoute-card-btn"
        onClick={() =>
          navigate(pathById, {
            state: { id: mountainRoute._id },
          })
        }
      >
        <div className="mountainRoute-Info-img-valoraciones">
          <img
            className="mountainRoute-Info-img"
            src={mountainRoute.image}
            alt={`mountainRoute's ${mountainRoute.routeName} pic`}
          />
          <div>
            {/*--- Este componente hace la media de las estrellas ---*/}
            <ReadOnlyMountainRouteRating mountainRoute={mountainRoute} />
            <p>({mountainRoute?.ratings?.length} valoraciones)</p>
          </div>
        </div>
        <div className="mountainRoute-Info-toda_la_carta">
          <div className="mountainRoute-Info-routeName-descriptionGeneral">
            <div>
              <h4 className="mountainRoute-Info-name">{mountainRoute.routeName}</h4>
              <p className="mountainRoute-Info-descriptionGeneral">
                {mountainRoute.descriptionGeneral}
              </p>
            </div>
            {/* <div>
                            <div className="mountainRoute_ToggleBtnFollowMontainRoute">
                                <ToggleBtnFollowMountainRoute mountainRouteToFollowId={mountainRoute._id} />
                            </div>
                        </div> */}
          </div>
          <div className="mountainRoute-Info-separar-info-general-routeState">
            <div className="mountainRoute-Info-separar-info-general">
              <p className="mountainRoute-Info-distance">
                {' '}
                <FcEditImage className="mountainRoute-FcEditImage" />
                {mountainRoute.routeDistance} km
              </p>
              <p className="mountainRoute-Info-routeDuration">
                {' '}
                <FcClock className="mountainRoute-FcClock" />
                {mountainRoute.routeDuration} Horas
              </p>
              <p className="">
                <FcAddRow className="mountainRoute-FcAddRow" />
                {mountainRoute.difficulty}
              </p>
              <p className="">
                {' '}
                <FcDepartment className="mountainRoute-FcDepartment" />{' '}
                {mountainRoute.routeLocation}
              </p>
            </div>
            <div className="mountainRoute-Info-separar-routeState">
              <p className="">{mountainRoute.routeState}</p>
            </div>
          </div>
        </div>
      </button>
    </section>
  );
};

export default CardMountainRoute2;
