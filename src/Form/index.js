import React from 'react';
import "./style.css";


const Form = () => {
    return (
        <div className="backgroundContainer">
        <div className="formContainer">
          <h1 className="formContainer__title">Kalkulator Walut</h1>
          <div className="form">
            <label className="form__label" for="amount">Kwota:</label>
            <input className="form__input" type="number" id="amount" placeholder="tutaj wpisz kwote do przeliczenia" />
    
            <label className="form__label" for="from">Z:</label>
            <select className="form__select" id="from">
              <option>PLN</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
    
            <label className="form__label" for="to">Na:</label>
            <select className="form__select" id="to">
              <option >USD</option>
              <option >EUR</option>
              <option >PLN</option>
            </select>
    
            <button className="form__button" onclick="convert()">Przelicz</button>
          </div>
    
          <div id="result" className="result"></div>
        </div>
      </div>
    );
  };
  export default Form;
  