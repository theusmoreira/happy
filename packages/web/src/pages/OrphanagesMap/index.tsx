import React from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Map,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';

import logoImg from '../../assets/logo.svg';
import './styles.css';
import mapIcon from '../../utils/mapIcon';

const OrphanagesMap: React.FC = () => (
    <div id="page-map">
      <aside>
        <header>
          <img src={logoImg} alt="Logo"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :{')'}</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.4334719, -46.5809811]}
        zoom={19}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        <Marker
        icon={mapIcon}
        position={[-23.4334719, -46.5809811]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
            Lar da meninas
            <Link to="/orphanage/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to='/orphanage/create' className='create-orphanage'>
        <FiPlus size={30} color='#fff'/>
      </Link>
    </div>
);

export default OrphanagesMap;
