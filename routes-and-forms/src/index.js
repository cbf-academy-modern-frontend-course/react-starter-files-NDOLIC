import {React} from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import Home from "./components/home";
import Ducklings from "./components/ducklings";
import Puppies from "./components/puppies";
import Kittens from "./components/kittens";
import PetForm from "./components/PetForm";
export default function App() {
  return (
    <Router>
      <ul className="breadcrumb">
        <li><Link to="/"> All Pets </Link></li>
        <li><Link to="/kittens"> Kittens </Link></li>
        <li><Link to="/puppies"> Puppies </Link></li>
        <li><Link to="/ducklings"> Ducklings </Link></li>
        <li><Link to="/aboutuspage"> About Us Page</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="kittens" element={<Kittens />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="puppies" element={<Puppies />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="ducklings" element={<Ducklings />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="petform" element={<PetForm />} />
      </Routes>
  </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
