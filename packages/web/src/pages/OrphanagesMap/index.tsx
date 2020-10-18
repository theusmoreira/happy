import React, { useEffect, useState } from 'react';
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
import api from '../../services/api';

interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const [userCoords, setUserCoords] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const loadOrphanages = async () => {
      await api.get('/orphanages').then((response) => setOrphanages(response.data));
    };
    loadOrphanages();
  }, []);

  // Carregar posição do usuário
  useEffect(() => {
    async function loadPosition() {
      const result = await navigator.permissions.query({ name: 'geolocation' });

      if (result.state !== 'granted') {
        alert('Oooops... Precisamos de sua permissão para obter sua localização');
      }
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserCoords([
          latitude,
          longitude,
        ]);
      });
    }
    loadPosition();
  }, []);

  return (
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
        center={userCoords}
        zoom={16}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map((orphanage) => (
          <Marker
          key={orphanage.id}
          icon={mapIcon}
          position={[orphanage.latitude, orphanage.longitude]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
              {orphanage.name}
              <Link to={`/orphanage/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>

        ))}
      </Map>

      <Link to='/orphanage/create' className='create-orphanage'>
        <FiPlus size={30} color='#fff'/>
      </Link>
    </div>
  );
};

export default OrphanagesMap;
