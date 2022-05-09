import React from 'react'


const Planets = ({ setUrl, data, next, previous }) => {

  const handleOnClick = (url) => {
    setUrl(url);
  }
  
  return (
     <div className='container'>
      <div className='row'>
        {data.map((entry, index) => {
          return (
            <div key={index}>
              <div>
                <h1>
                  Name: {entry.name}
                </h1>
                <p>Climate: {entry.climate}</p>
                <p>Gravity: {entry.gravity}</p>
                <p>Population: {entry.population}</p>
                <p>Terrain: {entry.terrain}</p>
              </div>
            </div>
          )
        })}
      { previous ? <button onClick={() => handleOnClick(previous)} >Previous</button> : <button disabled>Previous</button>}
      { next ? <button onClick={() => handleOnClick(next)}>Next</button> : <button disabled>Next</button> }
      </div>   
    </div>
  )
}

export default Planets
