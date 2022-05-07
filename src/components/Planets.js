import React from 'react'


const Planets = ({ data, next, previous, setData }) => {

  const handleOnClick = (url) => {

  }
  
  return (
     <div className='container'>
      <div className='row'>
        {data.map((entry, index) => {
          return (
            <div key={index}>
              <div>
                <h1>
                  {entry.name}
                </h1>
                <p>{entry.climate}</p>
                <p>{entry.gravity}</p>
                <p>{entry.population}</p>
                <p>{entry.terrain}</p>
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
