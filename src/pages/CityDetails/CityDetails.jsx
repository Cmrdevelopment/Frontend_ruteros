import './CityDetails.css';
import './CityDetailsDescription.css';
import './CityDetailsComments.css';

import { Avatar, Button, Divider, Grid, Paper, TextField, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { BsCalendarDay } from 'react-icons/bs';
import { FaMapMarker } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

import Carousel_imgs from '../../components/Carousel_imgs/Carousel_imgs';
import Comments from '../../components/Comments/Comments';
import DeleteCommentComponent from '../../components/DeleteComment/DeleteComment';
import ReadOnlyCityRating from '../../components/ratings/ReadOnlyCityRating/ReadOnlyCityRating';
import WriteRatingForOffer from '../../components/ratings/WriteRatingForOffer/WriteRatingForOffer';
import RouteMap from '../../components/RouteMap/RouteMap';
import { itemsToCarryArr } from '../../data/object.itemsToCarry';
import { createMasChat } from '../../services/API_proyect/chat.service';
import { getCityById } from '../../services/API_proyect/city.service';
import {
  createComment,
  getByReference,
} from '../../services/API_proyect/comment.service';

const CityDetails = () => {
  const [res, setRes] = useState({});
  const [resComment, setResComment] = useState({});
  const [resNewChat, setResNewChat] = useState({});
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [city, setCity] = useState(null);
  const [comments, setComments] = useState(null);
  const theme = useTheme();
  const { state } = useLocation();
  const { id } = state;
  const geolocations = [
    [51.505, -0.09],
    [51.505, -0.07],
  ];

  const getData = async () => {
    setLoading(true);
    setRes(await getCityById(id));
    setLoading(false);
  };

  const handleComment = async () => {
    const customFormData = {
      commentContent: inputValue,
      commentType: 'Publico',
      referenceOfferComment: id,
    };
    setLoading(true);
    setResComment(await createComment(customFormData));
    setLoading(false);
  };

  const handleCommentPrivate = async () => {
    const customFormData = {
      commentContent: inputValue,
      commentType: 'Privado',
      referenceOfferComment: id,
    };
    setLoading(true);
    setResNewChat(await createMasChat(customFormData));
    setLoading(false);
  };

  useEffect(() => {
    if (resNewChat?.status == 200) {
      setShow(!show);
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        showConfirmButton: false,
        timer: 1500,
      });
      setResNewChat({});
    }
  }, [resNewChat]);

  const getComments = async () => {
    const dataComments = await getByReference('City', id);
    console.log(dataComments);
    const filterData = dataComments.data.filter(
      (singleCommets) => singleCommets.commentType == 'Publico',
    );

    console.log(filterData);
    setComments(filterData);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (res.status == 200) {
      setCity(res.data);
    }

    // TODO: swal alert in case of error !!!!
  }, [res]);

  useEffect(() => {
    if (city != null) {
      getComments();
    }
  }, [city]);

  useEffect(() => {
    if (res.status == 200) {
      getComments();
    }

    // TODO: swal alert in case of error !!!!
  }, [resComment]);

  return (
    <div className="cityDetails-container">
      <div className="cityDetails-carousel-imgs-container">
        {city && <Carousel_imgs images={city.images} />}
      </div>

      <div className="cityDetails-image-and-info-container">
        <img
          className="cityDetails-image"
          src={city?.image}
          alt="imagen ruta ciudad"
        ></img>
        <div className="cityDetails-info-container">
          <div className="cityDetails-title-and-state">
            <div className="cityDetails-title">{city?.routeName}</div>
            <div className="cityDetails-cityState">{city?.routeState}</div>
          </div>
          <div className="cityDetails-read-ratings">
            {city && <ReadOnlyCityRating city={city} />} ({city?.ratings.length})
          </div>
          <div className="cityDetails-info-city-salary-jobtype-expYears">
            <div className="cityDetails-info-city">
              <p>Localización</p>
              <div className="cityDetails-info-city-detail">
                <FaMapMarker /> {city?.routeLocation}
              </div>
            </div>
            <div className="cityDetails-info-annualSalary">
              <p>Distancia</p>
              <div className="cityDetails-info-city-detail">
                {city?.routeDistance} Kms
              </div>
            </div>
            <div className="cityDetails-info-jobType">
              <p>Dificultad</p>
              <div className="cityDetails-info-city-detail">
                <FaLaptopCode /> {city?.difficulty}
              </div>
            </div>
            <div className="cityDetails-info-experienceYears">
              <p>Duración</p>
              <div className="cityDetails-info-city-detail">
                <BsCalendarDay /> {city?.routeDuration} hora/s
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cityDetails-city-rating-writeRating-container">
        <p>Valora esta ruta</p>
        {city && <WriteRatingForOffer offerToRate={city} />}{' '}
        {/*PENDIENTE DE CAMBIAR, HAY QUE CREAR WRITERATINGFORCITY*/}
      </div>
      {/* <RouteMap geolocations={geolocations} /> */}

      {city && showRouteMap(city)}

      <div className="cityDetails-city-jobType-itemsToCarry">
        <div className="cityDetails-city-jobType">
          <h3>Localización y dificultad</h3>
          <div className="cityDetails-city-jobType-without-title">
            <div className="cityDetails-city-localization">
              <h5>
                <FaMapMarker /> Localización
              </h5>
              <div className="cityDetails-info-city-jobType">{city?.routeLocation}</div>
            </div>
            <div className="cityDetails-jobType">
              <h5>
                <FaLaptopCode /> Estado de la ruta
              </h5>
              <div className="cityDetails-info-city-jobType">{city?.routeState}</div>
            </div>
          </div>
        </div>
        <div className="cityDetails-itemsToCArry">
          <h3>Equipación recomendada</h3>

          <div className="cityDetails-info-itemsToCArry">
            <h5>
              <BiCodeAlt /> Equipo
            </h5>
            <div className="cityDetails-info-itemToCarry">
              {/* ----------Show City route's items to carry -------------------- */}
              <div className="cityDetails-icons-itemsToCarry-container">
                {itemsToCarryArr
                  .filter((itemToCarry) => city?.itemsToCarry.includes(itemToCarry.name))
                  .map((itemToCarry, index) => (
                    <figure
                      key={`${itemToCarry.name}_${index}`}
                      className="cityDetails-tecnologia-item"
                      id={itemToCarry.name}
                    >
                      <div className="cityDetails-icon-container">
                        <img
                          className="cityDetails-itemToCarry-image"
                          src={itemToCarry.image}
                          alt={itemToCarry.name}
                        />
                        <p>{itemToCarry.name}</p>
                      </div>
                    </figure>
                  ))}
              </div>
              {/* //------------------------ Show City Route item's to carry -------------------- */}
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------- City Route Description ----------------------- */}
      <div className="cityDetails-city-description">
        <h3>Descripción</h3>
        <p>{city?.descriptionGeneral}</p>
        <h3>Duración</h3>
        <p>{city?.routeDuration}</p>
        <h3>Distancia</h3>
        <p>{city?.routeDistance}</p>
      </div>
      {/* ----------------------- City Route Description ----------------------- */}

      {/* <Paper style={{ padding: '40px 20px 55px', backgroundColor: '#fcfcfc' }}> */}

      <button className="cityDetails-private-comment-btn" onClick={() => setShow(!show)}>
        Chat privado
      </button>

      {show ? (
        <div className="cityDetails-private-comments-container">
          <Paper
            style={{
              padding: '40px 20px 55px',
              backgroundColor: '#fcfcfc',
              border: '0px solid red',
              width: '100%',
            }}
          >
            <h3>Comentario privado</h3>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={city?.image} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <TextField
                  id="newComent"
                  label="Pon tu comentario"
                  variant="outlined"
                  style={{ width: '100%' }}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    border: 'none',
                    borderRadius: '30px',
                    height: '39px',
                    width: '270px',
                    [theme.breakpoints.down('sm')]: {
                      width: '120px',
                    },
                    backgroundColor: '#25d366',
                    color: 'white',
                    fontSize: '16px',
                    transition: 'linear .2s',
                    marginTop: '30px',
                    ':hover': {
                      borderBottom: '1.5px solid #25d366',
                      backgroundColor: 'rgb(250, 250, 250)',
                      color: '#25d366',
                      fontSize: '18px',
                      cursor: 'pointer',
                    },
                  }}
                  onClick={() => handleCommentPrivate()}
                  disabled={loading}
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ) : null}

      {/* -------------------COMMENTS ----------------------------- */}
      <div className="cityDetails-public-comments-container">
        <Paper
          style={{
            padding: '40px 20px 0px',
            backgroundColor: '#fcfcfc',
            border: '0px solid red',
            width: '100%',
          }}
        >
          <h3>Comentario público</h3>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={city?.image} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <TextField
                id="newComent"
                label="Pon tu comentario"
                variant="outlined"
                style={{ width: '100%' }}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  border: 'none',
                  borderRadius: '30px',
                  height: '39px',
                  width: '270px',
                  [theme.breakpoints.down('sm')]: {
                    width: '120px',
                  },
                  backgroundColor: '#25d366',
                  color: 'white',
                  fontSize: '16px',
                  transition: 'linear .2s',
                  marginTop: '30px',
                  ':hover': {
                    borderBottom: '1.5px solid #25d366',
                    backgroundColor: 'rgb(250, 250, 250)',
                    color: '#25d366',
                    fontSize: '18px',
                    cursor: 'pointer',
                  },
                }}
                onClick={() => handleComment()}
                disabled={loading}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" style={{ margin: '30px 0' }} />
          <div className="Dev-comments" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {comments != null &&
              comments.map((singleComment) => (
                <div className="singlecomment-div" key={singleComment._id}>
                  <Comments comment={singleComment} setComentsByChild={setComments} />
                  <DeleteCommentComponent
                    className="trash-icon"
                    commentId={singleComment._id}
                  />
                </div>
              ))}
          </div>
        </Paper>
      </div>
      {/* ------------------ COMMENTS ------------------------------- */}
    </div>
  );
};

const showRouteMap = (city) => (
  <RouteMap
    geolocations={[
      [city.routeStartLatitude, city.routeStartLongitude],
      [city.routeEndLatitude, city.routeEndLongitude],
    ]}
  />
);

export default CityDetails;
