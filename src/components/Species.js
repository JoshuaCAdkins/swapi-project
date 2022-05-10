import React from 'react'

const Species = ({ setUrl, data, next, previous }) => {

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
                  Species: {entry.name}
                </h2>
                <p className='text-light'>Language: {entry.language}</p>
                <p className='text-light'>Classification: {entry.classification}</p>
                <p className='text-light'>Lifespan: {entry.average_lifespan}</p>
                <p className='text-light'>Average height: {entry.average_height}</p>
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

export default Species
