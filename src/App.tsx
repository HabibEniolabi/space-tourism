import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ResponsiveBackground from "./components/ResponsiveBackground";
import StripeOverlay from "./components/StripeOverlay";
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
    <main className="relative h-[100dvh] overflow-hidden bg-[#0b0f1d] text-white">
      <ResponsiveBackground
        desktop={currentBackground.desktop}
        tablet={currentBackground.tablet}
        mobile={currentBackground.mobile}
      />

      <div className="absolute inset-0 z-[1] bg-[#050814]/25" />

      <StripeOverlay />

      <div className="relative  h-full overflow-hidden">
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