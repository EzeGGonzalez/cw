import axios from 'axios';

/*
  Utilizá esta función para completar el llamado a la API.
*/
export const getCountries = () => {
  // https://restcountries.eu/rest/v2/all?fields=flag;region;name;population

  // hacemos la petición get a la api que nos devuelve el array de paises
  // como lo pide el enunciado, usamos axios
  //
  return axios
    .get('https://restcountries.eu/rest/v2/all?fields=flag;region;name;population')
    .then(result => result.data) // en data tengo lo que me reponde la api
}