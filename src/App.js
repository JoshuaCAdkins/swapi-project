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

const App = () => {

  const [ next, setNext ] = useState();
  const [ previous, setPrevious ] = useState();
  const [ data, setData ] = useState([]);
  const [ url, setUrl ] = useState();


  useEffect(() => {
    fetch(url)
        .then( res => res.json())
        .then( data => {
          setData(data.results)
          setNext(data.next)
          setPrevious(data.previous)
        })
        .catch((err) => {
            console.log(err);
        });
  }, [url, previous, next]);

  return (
    <>
      <Router>
            <Navbar setUrl={setUrl} />
            <div style={{ backgroundImage: `url(${starBackground})`, height: '100vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/people' element={<People data={data} setUrl={setUrl} next={next} previous={previous} />} />
                <Route path='/planets' element={<Planets data={data} setUrl={setUrl} next={next} previous={previous} />} />
                <Route path='/films' element={<Films data={data} setUrl={setUrl} next={next} previous={previous} />} />
                <Route path='/species' element={<Species data={data} setUrl={setUrl} next={next} previous={previous} />} />
                <Route path='/starships' element={<Starships data={data} setUrl={setUrl} next={next} previous={previous} />} />
              </Routes>
            </div>
      </Router>
    </>
  )
}

export default App

