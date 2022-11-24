import {React} from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import Home from "./components/home";
import Ducklings from "./components/ducklings";
import Puppies from "./components/puppies";
import Kittens from "./components/kittens";
import PetForm from "./components/PetForm";
import Aboutuspage from "./components/aboutuspage";
export default function App() {
  return (
    <Router>
      <ul className="breadcrumb">
        <li><Link to="/"> All Pets </Link></li>
        <li><Link to="/kittens"> Kittens </Link></li>
        <li><Link to="/puppies"> Puppies </Link></li>
        <li><Link to="/ducklings"> Ducklings </Link></li>
        <li><Link to="/aboutuspage"> About Us Page</Link></li>
        <li><Link to="/petform"> PetForm</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="puppies" element={<Puppies />} />
      </Routes>
      <Routes>
        <Route path="ducklings" element={<Ducklings />} />
      </Routes>
      <Routes>
        <Route path="kittens" element={<Kittens />} />
      </Routes>
      <Routes>
        <Route path="petform" element={<PetForm />} />
      </Routes>
      <Routes>
        <Route path="aboutuspage" element={<Aboutuspage />} />
      </Routes>
  </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
