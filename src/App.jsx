import { Route, Routes } from 'react-router-dom';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Header from './components/Header';
import backgroundHomeDesktop from "./assets/images/home/background-home-desktop.jpg";

const App = () => {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 8, 20, 0.25), rgba(5, 8, 20, 0.25)), url(${backgroundHomeDesktop})`,
      }}
    >
      {/* Vertical stripe overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(90deg,_rgba(255,255,255,0.04)_0px,_rgba(255,255,255,0.04)_58px,_transparent_58px,_transparent_88px)] opacity-60" />

      {/* Page content */}
      <div className="relative z-10">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
