import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RedPage } from "./pages/RedPage";
import { OrangePage } from "./pages/OrangePage"
import { YellowPage } from "./pages/YellowPage";
import { GreenPage } from "./pages/GreenPage";
import { BluePage } from "./pages/BluePage";
import { PurplePage } from "./pages/PurplePage";
import { NavBar } from "./components/NavBar";

export function AppRoutes() {
  return (
    <div>
      <Router>
        <NavBar/>

        <Routes>
          <Route path="/red" element={<RedPage />}></Route>
          <Route path="/orange" element={<OrangePage />}></Route>
          <Route path="/yellow" element={<YellowPage />}></Route>
          <Route path="/green" element={<GreenPage />}></Route>
          <Route path="/blue" element={<BluePage />}></Route>
          <Route path="/purple" element={<PurplePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
