import './CardCity.css';

import { FcAddRow, FcClock, FcDepartment, FcEditImage } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

import ReadOnlyCityRating from '../ratings/ReadOnlyCityRating/ReadOnlyCityRating';
import ToggleBtnFollowCity from '../ToggleBtnFollowCity/ToggleBtnFollowCity';

const CardCity = ({ city }) => {
  const navigate = useNavigate();
  const pathById = `/cityDetails`;

  return (
    <section className="city-Info">
      <div className="city_ToggleBtnFollowUser">
        <ToggleBtnFollowCity cityToFollowId={city._id} />
      </div>
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
            alt={`city's ${city.routeName} pic`}
          />
          <div>
            {/*--- Este componente hace la media de las estrellas ---*/}
            <ReadOnlyCityRating city={city} />
            <p>({city?.ratings?.length} valoraciones)</p>
          </div>
        </div>
        <div className="city-Info-toda_la_carta">
          <div className="city-Info-routeName-descriptionGeneral">
            <div>
              <h4 className="city-Info-name">{city.routeName}</h4>
              <p className="city-Info-descriptionGeneral">
                {city.descriptionGeneral}
              </p>
            </div>
            {/* <div>
                            <div className="mountainRoute_ToggleBtnFollowMontainRoute">
                                <ToggleBtnFollowMountainRoute mountainRouteToFollowId={mountainRoute._id} />
                            </div>
                        </div> */}
          </div>
          <div className="city-Info-separar-info-general-routeState">
            <div className="city-Info-separar-info-general">
              <p className="city-Info-distance">
                {' '}
                <FcEditImage className="city-FcEditImage" />
                {city.routeDistance} km
              </p>
              <p className="city-Info-routeDuration">
                {' '}
                <FcClock className="city-FcClock" />
                {city.routeDuration} Horas
              </p>
              <p className="">
                <FcAddRow className="city-FcAddRow" />
                {city.difficulty}
              </p>
              <p className="">
                {' '}
                <FcDepartment className="city-FcDepartment" />{' '}
                {city.routeLocation}
              </p>
            </div>
            <div className="city-Info-separar-routeState">
              <p className="">{city.routeState}</p>
            </div>
          </div>
        </div>
      </button>
    </section>
  );
};

export default CardCity;

//Version Anterior
// import './CardCity.css';

// import { FcAddRow, FcClock, FcDepartment, FcEditImage } from 'react-icons/fc';
// import { useNavigate } from 'react-router-dom';

// import ReadOnlyCityRating from '../ratings/ReadOnlyCityRating/ReadOnlyCityRating';
// import ToggleBtnFollowCity from '../ToggleBtnFollowCity/ToggleBtnFollowCity';

// const CardCity = ({ city }) => {
//   const navigate = useNavigate();
//   const pathById = `/cityDetails`;

//   return (
//     <section className="city-Info">
//       <button
//         className="city-card-btn"
//         onClick={() =>
//           navigate(pathById, {
//             state: { id: city._id },
//           })
//         }
//       >
//         <div className="city-Info-img-valoraciones">
//           <img
//             className="city-Info-img"
//             src={city.image}
//             alt={`city's ${city.routeName} pic`}
//           />
//           <div>
//             {/*--- Este componente hace la media de las estrellas ---*/}
//             <ReadOnlyCityRating city={city} />
//             <p>({city?.ratings?.length} valoraciones)</p>
//             {/* {city.city} */}
//           </div>
//         </div>
//         <div className="city-Info-toda_la_carta">
//           <div className="city-Info-routeName-descriptionGeneral">
//             <div>
//               <h4 className="city-Info-name">{city.routeName}</h4>
//               <p className="city-Info-descriptionGeneral">{city.descriptionGeneral}</p>
//             </div>
//             <div>
              
//             </div>
//           </div>
//           <div className="city-Info-separar-info-general-routeState">
//             <div className="city-Info-separar-info-general">
//               <p className="city-Info-distance">
//                 {' '}
//                 <FcEditImage className="city-FcEditImage" />
//                 {city.routeDistance} km
//               </p>
//               <p className="city-Info-routeDuration">
//                 {' '}
//                 <FcClock className="city-FcClock" />
//                 {city.routeDuration} Horas
//               </p>
//               <p className="">
//                 <FcAddRow className="city-FcAddRow" />
//                 {city.difficulty}
//               </p>
//               <p className="">
//                 {' '}
//                 <FcDepartment className="city-FcDepartment" /> {city.routeLocation}
//               </p>
//             </div>
//             <div className="city-Info-separar-routeState">
//               <p className="">{city.routeState}</p>
//             </div>
            
//           </div>
//         </div>
//         <div className="city_ToggleBtnFollowUser">
//                 <ToggleBtnFollowCity cityToFollowId={city._id} />
//         </div>
//       </button>
//     </section>
//   );
// };

// export default CardCity;