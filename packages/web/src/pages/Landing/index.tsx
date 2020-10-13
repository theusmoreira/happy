import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import './styles.css';

const Landing: React.FC = () => (
    <div id="page-landing">

      <div className="content-wrapper">
        <img src={logoImg} alt="Logo"/>
        <h1>Leve felicidade para o mundo</h1>
        <p>
          Visite orfanatos e mude o dia
          de muitas crianças.
        </p>

        <div className="location">
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </div>

        <Link to="/map" className='enter-app'>
          <FiArrowRight size={32} color="rgba(0, 0, 0, 0.6)"/>
        </Link>
      </div>

    </div>
);

export default Landing;
