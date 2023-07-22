import './CreateMountainRoute2.css';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

//import { useAuth } from '../../contexts/authContext';
import { technologies } from '../../data/object.tecnologias';
import handleMountainRouteCreationResponse from '../../hooks/useCreateMountainRoute';
import { createMountainRoute } from '../../services/API_proyect/mountainRoute.service';
import Uploadfile from '../Uploadfile';

const createMountainRoute2 = () => {
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [arrayItems, setArrayItems] = useState([]);
  const difficulty = ['Easy', 'Medium', 'Hard'];
  const routeState = ['Close', 'Abandoned', 'Open'];
  //const offerStates = ['Close', 'Suspended', 'Open'];
  //const { user } = useAuth();

  const {
    register,
    handleSubmit,
    //setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const inputfile = document.getElementById('file-upload').files;
    console.log(inputfile);
    let customFormData;

    if (inputfile.length !== 0) {
      const imageArray = Array.from(inputfile); // Convert FileList to an array
      customFormData = {
        ...data,
        routeDistance: parseInt(data.routeDistance),
        routeDuration: parseInt(data.routeDuration),
        routeState: 'Open',
        itemsToCarry: arrayItems,
        //image: inputfile[0],
        //images: imageArray[1],
        images: imageArray,
        // images: inputfile,
      };
    }

    setSend(true);
    const response = await createMountainRoute(customFormData);
    setRes(response);
    handleMountainRouteCreationResponse(response);
    setSend(false);
  };

  useEffect(() => {
    console.log(send);
  }, [send]);

  useEffect(() => {
    if (res.status == 200) {
      console.log(res);
    }
  }, []);

  const createArrayItems = ({ target }) => {
    if (arrayItems.includes(target.id)) {
      setArrayItems((value) => {
        const customArray = [];
        value.forEach((element) => {
          if (target.id != element) customArray.push(element);
        });
        return customArray;
      });
    } else {
      setArrayItems((value) => {
        const customArray = [...value, target.id];
        return customArray;
      });
    }
  };

  return (
    <>
      <div className="crear-oferta-titulo">
        <h3 id="oferta-h3-general">¡Crea tu</h3>
        <p> </p>
        <h3 id="oferta-h3-general" className="h3-oferta">
          &nbsp; Ruta de Montaña!
        </h3>
      </div>
      <section className="createOffer2-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <section className="form-container-titulo-tipo-oferta-tecnologias-Uploadfile">
            <div>
              <div className="Create_Offer_form-field">
                <label
                  className={`form-label ${errors.routeName ? 'required-label' : ''}`}
                ></label>
                <input
                  className="input-create-offer-años-salario-ciudad"
                  {...register('routeName', { required: true })}
                  placeholder="Escribe el nombre de la ruta"
                />
                {errors.routeName && (
                  <p className="error-message">Este campo es obligatorio</p>
                )}
              </div>
              <div className="form-field">
                {/* <label className="form-label">Tipo de oferta</label> */}
                <select
                  id="createOffer-select"
                  className={`input-select ${errors.difficulty ? 'required-label' : ''}`}
                  {...register('difficulty', { required: true })}
                >
                  {difficulty.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.difficulty && (
                  <p className="error-message">Este campo es obligatorio</p>
                )}
              </div>

              <div className="form-field-one">
                {/* <label className="form-label">Modalidad de trabajo</label> */}
                <select
                  id="createOffer-select"
                  className={`input-select ${errors.routeState ? 'required-label' : ''}`}
                  {...register('routeState', { required: true })}
                >
                  {routeState.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.routeState && (
                  <p className="error-message">Este campo es obligatorio</p>
                )}
              </div>
            </div>
            <div className="form-field-two">
              <label
                className={`form-label ${errors.technologies ? 'required-label' : ''}`}
              >
                {/* Tecnologías requeridas */}
              </label>
              {/* <div className="tecnologies-Offer">
                {technologies.map((technology, index) => (
                  <figure key={index} className="tecnologia-item" id={technology.name}>
                    <div className="image-container">
                      <img
                        className="tech-image"
                        src={technology.image}
                        alt={technology.name}
                      />
                    </div>
                    <p className="tech-image-text">{technology.name}</p>
                    <input
                      type="checkbox"
                      name={technology.name}
                      id={technology.name}
                      onChange={createArrayTech}
                    />
                  </figure>
                ))}
              </div> */}
              {errors.technologies && (
                <p className="error-message">Este campo es obligatorio</p>
              )}
            </div>
            <div className="form-field-four_Uploadfile">
              <Uploadfile />
            </div>
            <div className="form-container-años-salario-ciudad">
              <div className="form-field">
                <label
                  className={`form-label ${errors.routeDistance ? 'required-label' : ''}`}
                ></label>

                <input
                  type="number"
                  className="input-create-offer-años-salario-ciudad"
                  {...register('routeDuration', { required: false })}
                  placeholder="Duración de la ruta"
                />
                {errors.routeDistance && (
                  <p className="error-message">Este campo es obligatorio</p>
                )}
              </div>

              <div className="form-field">
                <label
                  className={`form-label ${errors.routeDistance ? 'required-label' : ''}`}
                ></label>
                <input
                  type="number"
                  className="input-create-offer-años-salario-ciudad"
                  {...register('routeDistance', { required: true })}
                  placeholder="Distancia de la Ruta"
                />
                {errors.routeDistance && (
                  <p className="error-message">Este campo es obligatorio</p>
                )}
              </div>

              <div className="form-field">
                <label
                  className={`form-label ${errors.routeLocation ? 'required-label' : ''}`}
                ></label>
                <input
                  className="input-create-offer-años-salario-ciudad"
                  {...register('routeLocation', { required: true })}
                  placeholder="Localización de la ruta"
                />

                {errors.routeLocation && (
                  <p className="error-message">Este campo es obligatorio</p>
                )}
              </div>
            </div>
          </section>
          <section className="form-container-titulo-descripción-responsabilidades-requisitos-remuneracion">
            <div className="form-container-descripcion-ganeral-responsabilidades">
              <div className="form-field">
                <label
                  className={`form-label ${errors.descriptionGeneral ? 'required-label' : ''
                    }`}
                ></label>

                <textarea
                  className="input-create-offer-dos"
                  {...register('descriptionGeneral', { required: true })}
                  placeholder="Descripción general"
                ></textarea>
                {errors.descriptionGeneral && (
                  <p className="error-message">Este campo es obligatorio</p>
                )}
              </div>

              <div className="form-field">
                <label
                  className={`form-label ${errors.descriptionGeneral ? 'required-label' : ''
                    }`}
                ></label>
                <textarea
                  className="input-create-offer-dos"
                  {...register('descriptionGeneral', { required: true })}
                  placeholder="Describe la ruta"
                ></textarea>
                {errors.descriptionGeneral && (
                  <p className="error-message">Este campo es obligatorio</p>
                )}
              </div>
            </div>
            <div className="form-container-descripcion-requisitos-remuneracion">
              <div className="form-field">
                <label
                  className={`form-label ${errors.descriptionGeneral ? 'required-label' : ''
                    }`}
                ></label>
                <textarea
                  className="input-create-offer-dos"
                  {...register('descriptionGeneral', { required: true })}
                  placeholder="Comenta los Requisitos"
                ></textarea>
                {errors.descriptionGeneral && (
                  <p className="error-message">Este campo es obligatorio</p>
                )}
              </div>

              <div className="form-field">
                <label
                  className={`form-label ${errors.description ? 'required-label' : ''}`}
                ></label>
                <textarea
                  className="input-create-offer-dos"
                  {...register('descriptionSalary', { required: true })}
                  placeholder="Comenta sobre la remuneración"
                ></textarea>

                {errors.description && (
                  <p className="error-message">Este campo es obligatorio</p>
                )}
              </div>
            </div>
          </section>

          <div id="btn-offer" className="form-field">
            <input
              className="btn-submit-create-offer_dos"
              type="submit"
              value="Crear Ruta"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default createMountainRoute2;
