import './MountainRoutes.css';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// import { NavLink } from 'react-router-dom';
import MountainRoutesList from '../../components/MountainRoutesList/MountainRoutesList';
// import AnnualSalarySlider from '../../components/offersComponts/AnnualSalarySlider/AnnualSalarySlider';
// import ExperienceYearsSlider from '../../components/offersComponts/ExperienceYearsSlider/ExperienceYearsSlider';
// import JobTypeSelect from '../../components/offersComponts/JobTypeSelect/JobTypeSelect';
// import OfferStateSelect from '../../components/offersComponts/OfferStateSelect/OfferStateSelect';
// import OfferTypeSelect from '../../components/offersComponts/OfferTypeSelect/OfferTypeSelect';
// import OffersList from '../../components/OffersList/OffersList';

const MountainRoutes = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 880 });
  // const [valueExperienceYearsSlider, setValueExperienceYearsSlider] = useState(() => '');
  // const [valueAnnualSalarySlider, setValueAnnualSalarySlider] = useState(10000);
  // const [valueJobTypeSelect, setValueJobTypeSelect] = useState('All');
  // const [valueOfferStateSelect, setValueOfferStateSelect] = useState('All');
  // const [valueOfferTypeSelect, setValueOfferTypeSelect] = useState('All');

  const [filtersToApply] = useState({
    // CompanyOffer, FreelandOffer
    offerType: '',

    // 0 to 100
    experienceYears: '',

    // number
    annualSalary: '',

    // Remote, Office, Hybrid
    jobType: '',

    // Close, Suspended, Open
    offerState: '',
  });

  // const handleChangeExperienceYearsSlider = (event) => {
  //   setValueExperienceYearsSlider(event.target.value);
  // };

  // const handleChangeAnnualSalarySlider = (event, newValue) => {
  //   setValueAnnualSalarySlider(newValue);
  // };

  // const handleChangeJobTypeSelect = (event) => {
  //   setValueJobTypeSelect(event.target.value);
  // };

  // const handleChangeOfferStateSelect = (event) => {
  //   setValueOfferStateSelect(event.target.value);
  // };

  // const handleChangeOfferTypeSelect = (event) => {
  //   setValueOfferTypeSelect(event.target.value);
  // };

  // useEffect(() => {
  //   setFiltersToApply({ ...filtersToApply, experienceYears: valueExperienceYearsSlider });
  // }, [valueExperienceYearsSlider]);

  // useEffect(() => {
  //   setFiltersToApply({ ...filtersToApply, annualSalary: valueAnnualSalarySlider });
  // }, [valueAnnualSalarySlider]);

  // useEffect(() => {
  //   setFiltersToApply({ ...filtersToApply, jobType: valueJobTypeSelect });
  // }, [valueJobTypeSelect]);

  // useEffect(() => {
  //   setFiltersToApply({ ...filtersToApply, offerState: valueOfferStateSelect });
  // }, [valueOfferStateSelect]);

  // useEffect(() => {
  //   setFiltersToApply({ ...filtersToApply, offerType: valueOfferTypeSelect });
  // }, [valueOfferTypeSelect]);

  return (
    <div className="outletContainer">
      {isLargeScreen ? (
        <h2 className="mountainRouteTit">¡Ven y consulta todas nuestras rutas de montaña!</h2>
      ) : (
        <h2 className="mountainRouteTit">Sigue nuestras rutas de montaña</h2>
      )}

      <div className="spinner"></div>

      {<MountainRoutesList filters={filtersToApply} itemsPerPage={10} />}
    </div>
  );
};

export default MountainRoutes;
