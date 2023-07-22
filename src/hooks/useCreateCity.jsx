import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const handleCityCreationResponse = (res) => {
  if (res?.status === 200) {
    Swal.fire({
      icon: 'success',
      title: 'City Route creada con éxito!',
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (res?.status === 400 || res?.status === 500) {
    Swal.fire({
      icon: 'error',
      title: 'Error al crear CityRoute',
      text: 'Hubo un problema al intentar crear la CityRoute. Por favor, intente de nuevo.',
      showConfirmButton: false,
      timer: 1500,
    });
  } else if (res?.status === 404) {
    Swal.fire({
      icon: 'warning',
      title: 'Recurso no encontrado',
      text: 'La operación solicitada no se puede completar porque el recurso requerido no se encontró.',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export default handleCityCreationResponse;
