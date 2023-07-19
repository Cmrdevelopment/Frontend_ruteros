import './CardMountainRoute.css';

import { BsCalendarDay } from 'react-icons/bs';
import { FaMapMarker } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import ReadOnlyMountainRouteRating from '../ratings/ReadOnlyMountainRouteRating/ReadOnlyMountainRouteRating';
import ToggleBtnFollowMountainRoute from '../ToggleBtnFollowMountainRoute/ToggleBtnFollowMountainRoute';
const CardMountainRoute = ({ mountainRoute }) => {
  const navigate = useNavigate();
  const pathToMountainRouteDetails = `/MountainRouteDetails`;

  //console.log("CardOffer --> offer: ", offer)
  return (
    <section className="CardMountainRoute-Info">
      <section
        className="CardMountainRoute-link-to-mountainRouteDetails"
        onClick={() =>
          navigate(pathToMountainRouteDetails, {
            state: { id: mountainRoute._id },
          })
        }
      >
        <div className="CardMountainRoute-Info-img-ratings">
          <img
            className="CardMountainRoute-Info-img"
            src={mountainRoute.image}
            alt={`Mountain Route's ${mountainRoute.routeName} pic`}
          />
          <div className="CardMountainRoute-Info-ratings">
            {mountainRoute && (
              <ReadOnlyMountainRouteRating mountainRoute={mountainRoute} />
            )}
          </div>
        </div>
      </section>
      <section className="CardMountainRoute-paragraph">
        <div className="CardMountainRoute-Profile">
          <div className="CardMountainRoute-Info-tabla-name">
            {mountainRoute.routeName}
            <p className="CardMountainRoute-Info-routeDistance">
              {' '}
              (&euro;): {mountainRoute.routeDistance}
            </p>
          </div>
          <p className="CardMountainRoute-Info-routeLocation">
            {' '}
            <FaMapMarker /> {mountainRoute.routeLocation}
          </p>
          <div className="CardMountainRoute-Info-grupo-itemsToCarry">
            <h4 className="CardMountainRoute-Info-itemsToCarry">
              {mountainRoute.itemsToCarry.join(', ')}
            </h4>
            <p className="CardMountainRoute-Info-difficulty">
              <BsCalendarDay /> La dificultad de esta ruta es: {mountainRoute.difficulty}
            </p>
            <div className="CardMountainRoute-BtnToggle">
              <ToggleBtnFollowMountainRoute MountainRouteToFollowId={mountainRoute._id} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CardMountainRoute;
