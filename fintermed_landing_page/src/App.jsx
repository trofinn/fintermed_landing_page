import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Cumparator from "./pages/Cumparator.jsx";
import Dezvoltator from "./pages/Dezvoltator.jsx";


export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dezvoltator" element={<Dezvoltator />} />
        <Route path="/cumparator" element={<Cumparator />} />
      </Routes>
      </BrowserRouter>
  );
}