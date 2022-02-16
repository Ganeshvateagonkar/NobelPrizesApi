import "bootstrap/dist/css/bootstrap.min.css";

import data from "./data.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SearchByName from "./components/SearchByName";
import SearchByyear from "./components/SearchByYear";
import SearchByYearAndCategory from "./components/SearchByYearAndCategory";
import SearchByAlphabetical from "./components/SearchByAlphabetical";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/name" element={<SearchByName />} />
        <Route path="/year" element={<SearchByyear />} />
        <Route path="/yearandcategory" element={<SearchByYearAndCategory />} />
        <Route path="/alphabeticalorder" element={<SearchByAlphabetical />} />
      </Routes>
    </Router>
  );
}

export default App;
