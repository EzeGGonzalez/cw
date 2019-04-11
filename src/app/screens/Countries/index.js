import React, { Component } from 'react';

import './styles.scss';

// import paises from '../../constants/countries';

// importo el componente del filtro
import CountryFilterForm from '../../components/CountryFilterForm';
// importo la funcion de donde vamos a sacar los paises
import { getCountries } from '../../services/countries';

class Countries extends Component {
  // constructor (props) {
  //   super(props);
  //   this.filtrarPaises = this.filtrarPaises.bind(this);
  // }

  state = {
    countries: [],
    countriesApi: []
  }

  // el fetch a la API lo hacemos en componenDidMount
  componentDidMount () {
    // llamo a la funcion que definimos en services
    // que nos devuelve una promesa
    getCountries()
      .then(paises => {
        // voy a guardar el listado de paises a mostrar y el listado de paises original
        this.setState({
          countries: paises,
          countriesApi: paises
        })
      })
  }

  filtrarPaises = (palabraBusqueda) => {
    // siempre que filtremos, utilizo el array original de paises y guardo los filtrados en la propiedad countries (que son los que estoy mostrando en el render)
    const paisesFiltrados = this.state.countriesApi.filter(p => p.name.toLowerCase().includes( palabraBusqueda.toLowerCase() ));

    this.setState({
      countries: paisesFiltrados
    })
  }

  render() {
    return (
    <main className="main-container">
      <h1 className="countries-title">Paises</h1>

      <CountryFilterForm onSubmit={this.filtrarPaises} />

      <ul className="countries-container">
        {
          this.state.countries.map(p => <li>{p.name}</li>)
        }
      </ul>
    </main>
    );
  }
}

export default Countries;
