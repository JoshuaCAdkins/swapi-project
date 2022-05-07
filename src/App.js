import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import People from './components/People.js';
import Planets from './components/Planets.js';
import Films from './components/Films.js';
import Species from './components/Species.js';
import Starships from './components/Starships.js';
import starBackground from './resources/starBackground.jpg';
import axios from "axios";

const App = () => {

  const [ next, setNext ] = useState();
  const [ previous, setPrevious ] = useState();
  const [ data, setData ] = useState([]);
  const [ url, setUrl ] = useState("https://swapi.dev/api/");

  

  useEffect((url) => {
    axios.get(url).then(res => {
      setData(res.data.results)
    })
    
  }, [url, previous, next]);

  return (
    <>
      <Router>
            <Navbar setData={setData} setUrl={setUrl} setNext={setNext} setPrevious={setPrevious} />
            <div style={{ backgroundImage: `url(${starBackground})`, height: '100vh', backgroundSize: 'cover'}}>
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/people' element={<People data={data} setData={setData} next={next} previous={previous} />} />
                <Route path='/planets' element={<Planets data={data} setData={setData} next={next} previous={previous} />} />
                <Route path='/films' element={<Films data={data} setData={setData} next={next} previous={previous} />} />
                <Route path='/species' element={<Species data={data} setData={setData} next={next} previous={previous} />} />
                <Route path='/starships' element={<Starships data={data} setData={setData} next={next} previous={previous} />} />
              </Routes>
            </div>
      </Router>
    </>
  )
}

export default App

