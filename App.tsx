import React from 'react';
import { Scene } from './components/Scene';

const App: React.FC = () => (
  <div className="relative w-full h-screen bg-black overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Scene />
    </div>
  </div>
);

export default App;
