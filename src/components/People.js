import React from 'react'



const People = ({ setUrl, data, next, previous }) => {

  const handleOnClick = (url) => {
    setUrl(url)
  }

  return (
    <div className='container'>
      <div className='row row-cols-auto gy-4 py-3 justify-content-center'>
        {data.map((entry, index) => {
          return (
              <div key={index} className='col p-2 bg-dark align-items-center mx-3'>
                <h2 className='text-warning'>
                  Name: {entry.name}
                </h2>
                <p className='text-light'>Birth Year: {entry.birth_year}</p>
                <p className='text-light'>Gender: {entry.gender}</p>
                <p className='text-light'>Hair Color: {entry.hair_color}</p>
                <p className='text-light'>Eye: Color: {entry.eye_color}</p>
              </div>
          )
        })}
      </div>
      <div className='d-flex justify-content-between py-2'>
        { previous ? <button type='button' className='btn btn-warning btn-lg' onClick={() => handleOnClick(previous)} >Previous</button> : <button className='btn btn-outline-warning btn-lg' disabled>Previous</button>}
        { next ? <button type='button' className='btn btn-warning btn-lg' onClick={() => handleOnClick(next)}>Next</button> : <button className='btn btn-outline-warning btn-lg' disabled>Next</button> }
      </div>
    </div>
  )
}

export default People
