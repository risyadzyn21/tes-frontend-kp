import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ChangePhoto from "../pages/change-photo/ChangePhoto";
import AppHomeProfile from "../pages/home/AppHomeProfile";

function RoutesLink() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<AppHomeProfile />} />
          <Route path="/ganti-foto" element={<ChangePhoto />} />
        </Routes>
      </Router>
    </div>
  )
}

export default RoutesLink
