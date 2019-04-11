import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './styles.scss';

const invalidFormat = /[!@#$%^&*(),.?":{}|<>|\d]/g;

class CountryFilterForm extends Component {
  // creo la propiedad state del componente, donde guardo search (lo que la persona ingresa en el input) y error (un boolean para saber si hubo o no un error)
  state = {
    search: '',
    error: false
  };

  // constructor (props) {
  //   super(props);

  //   this.state = {
  //     search: '',
  //     error: false
  //   };

  //   this.handleSubmit = this.handleSearchChange.bind(this);
  //   this.handleSearchChange = this.handleSearchChange.bind(this);
  // }

  isValidCountryFormat = country => !invalidFormat.exec(country);

  handleSearchChange = event => this.setState({search: event.target.value});

  handleSubmit = event => {
    event.preventDefault();

    //lo primero que hago es volver a poner el error en false
    this.setState({
      error: false
    })

    // verifico si lo que ingreso la persona en el input es correcto
    if ( this.isValidCountryFormat(this.state.search) ) {
      // si es correcto, ejecuto la funcion que llega desde el componente padre
      this.props.onSubmit(this.state.search);
    } else {
      // si no es correco, paso la propiedad error a true
      this.setState({
        error: true
      })
    }
  }

  // handleSubmit (event) {
  //   event.preventDefault();
  //   this.props.onSubmit(this.state.search);
  // }

  render() {
    // destructuring
    const { error } = this.state;
    // const error = this.state.error;
    return (
      <form className="search-container" onSubmit={this.handleSubmit} noValidate>
        <div className="form-group">
          <input name="search" onChange={this.handleSearchChange} className={`search-input ${error ? 'error' : ''}`} type="text" placeholder="Ingrese el nombre del país a buscar" />
          {error && (
            <span className="error-message">
              Ingresar sólo letras y espacios
            </span>)}
        </div>
        <button className="search-button" type="submit">Buscar</button>
      </form>
    )
  }
}

CountryFilterForm.propTypes = {
  onSubmit: PropTypes.func
}

export default CountryFilterForm;
