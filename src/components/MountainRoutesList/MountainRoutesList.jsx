import './MountainRoutesList.css';

import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { getAllMountainRoutes } from '../../services/API_proyect/mountainRoute.service';
import { sortMountainRoutesByAverageScore_descendingOrder } from '../../util/filters/mountainRoute.filter';
import CardMountainRoute from '../CardMountainRoute/CardMountainRoute';
import { Spinner } from '../Spinner/Spinner';

const MountainRouteList = ({ itemsPerPage }) => {
  const [dataMountainRoutesList, setDataMountainRoutesList] = useState([]);
  const [downloading, setDownloading] = useState(false);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [pageCount, setPageCount] = useState(0);
  const [itemPerPage, setItemPerPage] = useState([]);

  const getMountainRouteData = async () => {
    setDownloading(true);
    const dataMountainRouteDB = await getAllMountainRoutes();
    // const dataToRender = dataMountainRouteDB.data;

    //   ////! filtramos la data

    // const copyFilters = { ...filters };
    // if (typeof filters.experienceYears == 'string') copyFilters.experienceYears = 10;
    // if (filters.experienceYears == 1.0001) copyFilters.experienceYears = 1;
    // if (filters.jobType == 'All') copyFilters.jobType = '';
    // if (filters.offerState == 'All') copyFilters.offerState = '';
    // if (typeof filters.annualSalary == 'string') copyFilters.annualSalary = 10000;
    // if (filters.offerType == 'All') copyFilters.offerType = '';

    // if (dataMountainRoute?.status == 200) {
    //   const dataFiltered = dataToRender.filter((mountainRoute) => {
    //     return (
    //       mountainRoute.offerType.includes(copyFilters.offerType) &&
    //       mountainRoute.offerState.includes(copyFilters.offerState) &&
    //       mountainRoute.jobType.includes(copyFilters.jobType) &&
    //       mountainRoute.annualSalary >= parseInt(copyFilters.annualSalary) &&
    //       mountainROute.experienceYears <= parseInt(copyFilters.experienceYears)
    //     );
    //   });

    // Filter offers by average score
    const dataSortByAverageScore = sortMountainRoutesByAverageScore_descendingOrder(
      dataMountainRouteDB.data,
    );

    const dataFilteredZero = dataSortByAverageScore.slice(0, itemsPerPage);
    const numerberPage = Math.ceil(dataSortByAverageScore.length / itemsPerPage);

    setPageCount(numerberPage);
    setDataMountainRoutesList(dataSortByAverageScore);
    setItemPerPage(dataFilteredZero);
    setDownloading(false);
    // } else {
    //   /// lanzar swall diciendo hay un error
    // }
  };

  useEffect(() => {
    getMountainRouteData();
  }, []);

  const handlePageClick = (event) => {
    //console.log(event) /// selected empieza por 0
    const end =
      event.selected * itemsPerPage + itemsPerPage == 0
        ? itemsPerPage
        : event.selected * itemsPerPage + itemsPerPage;
    const mountainRoutesListWithOffset = dataMountainRoutesList.slice(
      end - itemsPerPage,
      end,
    );
    setItemPerPage(mountainRoutesListWithOffset);
  };

  return (
    <div className="offersList-container">
      {downloading ? (
        <Spinner />
      ) : (
        <div className="offersList-paginate-and-offers-list-container">
          <div className="offersList-offers-container">
            <h2>Rutas de Montaña</h2>
            {itemPerPage.map((mountainRoute) => (
              <div key={mountainRoute._id}>
                <CardMountainRoute mountainRoute={mountainRoute} />
              </div>
            ))}
          </div>

          <ReactPaginate
            className="offersList-paginate"
            activeClassName="offersList-paginate-active-element"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
};

export default MountainRouteList;
