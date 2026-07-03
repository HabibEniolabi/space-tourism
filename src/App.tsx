import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ResponsiveBackground from "./components/ResponsiveBackground";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { pageBackgrounds } from "./data/pageBackgrounds";

const App = () => {
  const location = useLocation();

  const currentBackground =
    pageBackgrounds[location.pathname as keyof typeof pageBackgrounds] ??
    pageBackgrounds["/"];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0f1d] text-white">
      <ResponsiveBackground
        desktop={currentBackground.desktop}
        tablet={currentBackground.tablet}
        mobile={currentBackground.mobile}
      />

      <div className="absolute inset-0 z-[1] bg-[#050814]/25" />

      <div className="pointer-events-none absolute inset-0 z-[2] bg-[repeating-linear-gradient(90deg,_rgba(255,255,255,0.045)_0px,_rgba(255,255,255,0.045)_58px,_transparent_58px,_transparent_88px)] opacity-70" />

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
};

export default App;