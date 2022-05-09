import { Link } from 'react-router-dom';
import logo from '../resources/death-star-icon.png';


const Navbar = ({  setUrl } = {} ) => {


  const handleOnClick =  (navItem) => {
    if(navItem === 'people') {
      setUrl("https://swapi.dev/api/people/?format=json");
    } else if (navItem === 'planets') {
      setUrl('https://swapi.dev/api/planets/?format=json');
    } else if (navItem === 'films') {
      setUrl('https://swapi.dev/api/films/?format=json');
    } else if (navItem === 'species') {
      setUrl('https://swapi.dev/api/species/?format=json');
    } else if (navItem === 'starships') {
      setUrl('https://swapi.dev/api/starships/?format=json');
    }
  };
  
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className="container-fluid" style={{display: 'inline-block', textAlign: 'center'}}>
            <Link className='navbar-brand' to='/'><img src={logo} alt="" className='d-inline-block'/></Link>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid collapse navbar-collapse" style={{display: 'inline-block', justifyContent: 'center'}}>
          <ul className='navbar-nav'>
            <li className='nav-item fs-2'><Link className='nav-link' to='/people' onClick={() => handleOnClick('people')} >People</Link></li>
            <li className='nav-item fs-2'><Link className='nav-link' to='/planets' onClick={() => handleOnClick('planets')} >Planets</Link></li>
            <li className='nav-item fs-2'><Link className='nav-link' to='/films' onClick={() => handleOnClick('films')} >Films</Link></li>
            <li className='nav-item fs-2'><Link className='nav-link' to='/species' onClick={() => handleOnClick('species')} >Species</Link></li>
            <li className='nav-item fs-2'><Link className='nav-link' to='/starships' onClick={() => handleOnClick('starships')} >Starships</Link></li>
          </ul>
        </div>  
      </nav>
    </>
  )
};

export default Navbar;
