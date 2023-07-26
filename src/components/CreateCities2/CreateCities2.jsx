import './CreateCities2.css';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { itemsToCarryArr } from '../../data/object.itemsToCarry';
import handleCityCreationResponse from '../../hooks/useCreateCity';
import { createCity } from '../../services/API_proyect/city.service';
import Uploadfile from '../Uploadfile';

const createCities2 = () => {
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [arrayItemsToCarry, setArrayItemsToCarry] = useState([]);
  const difficulty = ['Easy', 'Medium', 'Hard'];
  const routeState = ['Close', 'Abandoned', 'Open'];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const inputfile = document.getElementById('file-upload').files;
    let customFormData;

    if (inputfile.length !== 0) {
      const imageArray = Array.from(inputfile); // Convert FileList to an array
      customFormData = {
        ...data,
        routeDistance: parseInt(data.routeDistance),
        routeDuration: parseInt(data.routeDuration),
        routeStartLatitude: parseFloat(data.routeStartLatitude),
        routeStartLongitude: parseFloat(data.routeStartLongitude),
        routeEndLatitude: parseFloat(data.routeEndLatitude),
        routeEndLongitude: parseFloat(data.routeEndLongitude),
        routeState: 'Open',
        itemsToCarry: arrayItemsToCarry,
        images: imageArray,
      };
    }

    setSend(true);
    const response = await createCity(customFormData);
    setRes(response);
    handleCityCreationResponse(response);
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

  const createArrayItemsToCarry = ({ target }) => {
    if (arrayItemsToCarry.includes(target.id)) {
      setArrayItemsToCarry((value) => {
        const customArray = [];
        value.forEach((element) => {
          if (target.id != element) customArray.push(element);
        });
        return customArray;
      });
    } else {
      setArrayItemsToCarry((value) => {
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
          &nbsp; Ruta de Ciudad!
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
                className={`form-label ${errors.arrayItemsToCarry ? 'required-label' : ''
                  }`}
              >
                {/* Items to pick up to to carry to this route */}
              </label>
              <div className="createCity-itemsToCarry-container">
                {itemsToCarryArr.map((itemToCarry, index) => (
                  <figure key={index} className="tecnologia-item" id={itemToCarry.name}>
                    <div className="image-container">
                      <img
                        className="tech-image"
                        src={itemToCarry.image}
                        alt={itemToCarry.name}
                      />
                    </div>
                    <p className="tech-image-text">{itemToCarry.name}</p>
                    <input
                      type="checkbox"
                      name={itemToCarry.name}
                      id={itemToCarry.name}
                      onChange={createArrayItemsToCarry}
                    />
                  </figure>
                ))}
              </div>
              {errors.arrayItemsToCarry && (
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
          <section className='form-route-start-end-geolocalization-container'>
            <input
              type="number"
              step="any"
              className="input-create-cityRoute-geolocalization"
              {...register('routeStartLatitude', { required: true })}
              placeholder="Latitud Comienzo Ruta"
              value="41.374663896520715"
            />

            <input
              type="number"
              step="any"
              className="input-create-cityRoute-geolocalization"
              {...register('routeEndLatitude', { required: true })}
              placeholder="Latitud Fin Ruta"
              value="41.367221067676326"
            />
            <input
              type="number"
              step="any"
              className="input-create-cityRoute-geolocalization"
              {...register('routeStartLongitude', { required: true })}
              placeholder="Longitud Comienzo Ruta"
              value="2.10063376682015"
            />
            <input
              type="number"
              step="any"
              className="input-create-cityRoute-geolocalization"
              {...register('routeEndLongitude', { required: true })}
              placeholder="Longitud Fin Ruta"
              value="2.095904339000168"
            />
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

              {/* <div className="form-field">
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
              </div> */}
            </div>
            {/* <div className="form-container-descripcion-requisitos-remuneracion">
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
            </div> */}
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

export default createCities2;