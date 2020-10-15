import React from 'react';
import './styles/global.css';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

const App: React.FC = () => (
    <div className="App">
      <Routes />
    </div>
);

export default App;
