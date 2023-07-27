import './MountainRouteDetails.css';
import './MountainRouteDetailsDescription.css';
import './MountainRouteDetailsComments.css';

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
import ReadOnlyMountainRouteRating from '../../components/ratings/ReadOnlyMountainRouteRating/ReadOnlyMountainRouteRating';
import WriteRatingForMountainRoute from '../../components/ratings/WriteRatingForMountainRoute/WriteRatingForMountainRoute';
// import { technologies } from '../../data/object.tecnologias';
import { createMasChat } from '../../services/API_proyect/chat.service';
import {
  createComment,
  getByReference,
} from '../../services/API_proyect/comment.service';
import { getMountainRouteById } from '../../services/API_proyect/mountainRoute.service';

const MountainRouteDetails = () => {
  const [res, setRes] = useState({});
  const [resComment, setResComment] = useState({});
  const [resNewChat, setResNewChat] = useState({});
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [mountainRoute, setMountainRoute] = useState(null);
  const [comments, setComments] = useState(null);
  const theme = useTheme();
  const { state } = useLocation();
  const { id } = state;
  //const [mountainRoute] = useState(null);

  const getData = async () => {
    setLoading(true);
    setRes(await getMountainRouteById(id));
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

    console.log(customFormData);
    setLoading(true);
    setResNewChat(await createMasChat(customFormData));
    setLoading(false);
  };

  useEffect(() => {
    if (resNewChat?.status == 200) {
      console.log(resNewChat);
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
    const dataComments = await getByReference('MountainRoute', id);
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
      setMountainRoute(res.data);
    }

    //console.log("OfferDetails -> res.data: ", res.data)

    // TODO: swal alert in case of error !!!!
  }, [res]);

  useEffect(() => {
    if (mountainRoute != null) {
      getComments();
    }
  }, [mountainRoute]);

  useEffect(() => {
    if (res.status == 200) {
      getComments();
    }

    // TODO: swal alert in case of error !!!!
  }, [resComment]);

  //return offer ? offerLayout(offer) : null

  return (
    <div className="mountainRouteDetails-container">
      <div className="mountainRouteDetails-image-and-info-container">
        <img
          className="mountainRouteDetails-image"
          src={mountainRoute?.image}
          alt="imagen mountainRoute"
        ></img>
        <div className="mountainRouteDetails-info-container">
          <div className="mountainRouteDetails-title-and-state">
            <div className="mountainRouteDetails-title">{mountainRoute?.routeName}</div>
            <div className="mountainRouteDetails-offerState">
              {mountainRoute?.routeState}
            </div>
          </div>
          <div className="mountainRouteDetails-read-ratings">
            {mountainRoute && (
              <ReadOnlyMountainRouteRating mountainRoute={mountainRoute} />
            )}{' '}
            ({mountainRoute?.ratings.length})
          </div>
          <div className="mountainRouteDetails-info-city-salary-jobtype-expYears">
            <div className="mountainRouteDetails-info-city">
              <p>Localización</p>
              <div className="mountainRouteDetails-info-offer-detail">
                <FaMapMarker /> {mountainRoute?.routeLocation}
              </div>
            </div>
            <div className="mountainRouteDetails-info-annualSalary">
              <p>Distancia</p>
              <div className="mountainRouteDetails-info-offer-detail">
                (&euro;) {mountainRoute?.routeDistance}
              </div>
            </div>
            <div className="mountainRouteDetails-info-jobType">
              <p>Dificultad</p>
              <div className="mountainRouteDetails-info-offer-detail">
                <FaLaptopCode /> {mountainRoute?.difficulty}
              </div>
            </div>
            <div className="mountainRouteDetails-info-experienceYears">
              <p>Duración</p>
              <div className="mountainRouteDetails-info-offer-detail">
                <BsCalendarDay /> {mountainRoute?.routeDuration} hora/s
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mountainRouteDetails-offer-rating-writeRating-container">
        <p>Valora esta ruta!</p>
        {mountainRoute && (
          <WriteRatingForMountainRoute mountainRouteToRate={mountainRoute} />
        )}
      </div>

      {mountainRoute && <Carousel_imgs images={mountainRoute.images} />}

      <div className="mountainRouteDetails-city-jobType-technologies">
        <div className="mountainRouteDetails-city-jobType">
          <h3>Localización y dificultad</h3>
          <div className="mountainRouteDetails-city-jobType-without-title">
            <div className="mountainRouteDetails-city-localization">
              <h5>
                <FaMapMarker /> Localización
              </h5>
              <div className="mountainRouteDetails-info-city-jobType">
                {mountainRoute?.routeLocation}
              </div>
            </div>
            <div className="mountainRouteDetails-jobType">
              <h5>
                <FaLaptopCode /> Estado de la ruta
              </h5>
              <div className="mountainRouteDetails-info-city-jobType">
                {mountainRoute?.routeState}
              </div>
            </div>
          </div>
        </div>
        <div className="mountainRouteDetails-technologies">
          <h3>Equipación recomendada</h3>

          <div className="mountainRouteDetails-info-technologies">
            <h5>
              <BiCodeAlt /> Equipo
            </h5>
            <div className="mountainRouteDetails-info-technology">
              {/* {offer && showTechnologies(offer.technologies, technologies)} */}

              {/* //------------------------ Show Offer Tecnologies -------------------- */}
              {/* <div className="offerDetails-icons-technologies-container">
                {itemsToCarry
                  .filter((tech) => offer?.technologies.includes(tech.name))
                  .map((tech, index) => (
                    <figure
                      key={`${tech.name}_${index}`}
                      className="offerDetails-tecnologia-item"
                      id={tech.name}
                    >
                      <div className="offerDetails-icon-container">
                        <img
                          className="offerDetails-tech-image"
                          src={tech.image}
                          alt={tech.name}
                        />
                        <p>{tech.name}</p>
                      </div>
                    </figure>
                  ))}
              </div> */}
              {/* //------------------------ Show Offer Tecnologies -------------------- */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="offerDetails-horizontal-line"></div> */}
      {/* <div
                className="offerDetails-offer-description"
                dangerouslySetInnerHTML={{ __html: offer?.description }}
                
            /> */}
      {/* ----------------------- Offer Description ----------------------- */}
      <div className="mountainRouteDetails-offer-description">
        <h3>Descripción</h3>
        <p>{mountainRoute?.descriptionGeneral}</p>
        {/* <h3>Responsabilidades</h3>
        <p>{offer?.descriptionResponsabilities}</p> */}
        <h3>Duración</h3>
        <p>{mountainRoute?.routeDuration}</p>
        <h3>Distancia</h3>
        <p>{mountainRoute?.routeDistance}</p>
      </div>
      {/* ----------------------- Offer Description ----------------------- */}

      {/* <Paper style={{ padding: '40px 20px 55px', backgroundColor: '#fcfcfc' }}> */}

      <button
        className="mountainRouteDetails-private-comment-btn"
        onClick={() => setShow(!show)}
      >
        Chat privado
      </button>

      {show ? (
        <div className="mountainRouteDetails-private-comments-container">
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
                <Avatar alt="Remy Sharp" src={mountainRoute?.image} />
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
      {/* <div className="offerDetails-horizontal-line"></div> */}

      {/* -------------------COMMENTS ----------------------------- */}
      <div className="mountainRouteDetails-public-comments-container">
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
              <Avatar alt="Remy Sharp" src={mountainRoute?.image} />
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

export default MountainRouteDetails;
