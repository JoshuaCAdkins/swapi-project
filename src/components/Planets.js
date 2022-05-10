import React from 'react'


const Planets = ({ setUrl, data, next, previous }) => {

  const handleOnClick = (url) => {
    setUrl(url);
  }
  
  return (
     <div className='container py-1'>
      <div className='row row-cols-auto gy-4 my-2 justify-content-center'>
        {data.map((entry, index) => {
          return (
            <div key={index} className='col p-2 bg-dark align-items-center mx-3'>
                <h2 className='text-warning'>
                  Planet: {entry.name}
                </h2>
                <p className='text-light'>Climate: {entry.climate}</p>
                <p className='text-light'>Gravity: {entry.gravity}</p>
                <p className='text-light'>Population: {entry.population}</p>
                <p className='text-light'>Terrain: {entry.terrain}</p>
            </div>
          )
        })}
      </div>   
      <div className='d-flex justify-content-between'>
        { previous ? <button type='button' className='btn btn-warning btn-lg' onClick={() => handleOnClick(previous)} >Previous</button> : <button className='btn btn-outline-warning btn-lg' disabled>Previous</button>}
        { next ? <button type='button' className='btn btn-warning btn-lg' onClick={() => handleOnClick(next)}>Next</button> : <button className='btn btn-outline-warning btn-lg' disabled>Next</button> }
      </div>
    </div>
  )
}

export default Planets
