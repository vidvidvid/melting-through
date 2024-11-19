import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutProject } from "./pages/AboutProject";
import { LandingPage } from "./pages/LandingPage";
import { Video } from "./pages/Video";
import { Workshops } from "./pages/Workshops";
import { WorkshopsWithAdults } from "./pages/WorkshopsWithAdults";
import { WorkshopsWithChildren } from "./pages/WorkshopsWithChildren";
import { WorkshopsWithQueerOrganizations } from "./pages/WorkshopsWithQueerOrganizations";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/workshops/adults' element={<WorkshopsWithAdults />} />
        <Route path='/workshops/children' element={<WorkshopsWithChildren />} />
        <Route
          path='/workshops/queer-organizations'
          element={<WorkshopsWithQueerOrganizations />}
        />
        <Route path='/workshops' element={<Workshops />} />
        <Route path='/about' element={<AboutProject />} />
        <Route path='/video' element={<Video />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
