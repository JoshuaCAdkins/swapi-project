import React from 'react';

const Films = ({ setUrl, data, next, previous  }) => {

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
                  Film: {entry.title}
                </h2>
                <p className='text-light'>Director: {entry.director}</p>
                <p className='text-light'>Producer: {entry.producer}</p>
                <p className='text-light'>Release date: {entry.release_date}</p>
            </div>
          )
        })}
      </div>   
      <div className='d-flex justify-content-between py-2'>
        { previous ? <button type='button' className='btn btn-warning btn-lg justify-content-start' onClick={() => handleOnClick(previous)} >Previous</button> : <button className='btn btn-outline-warning btn-lg' disabled>Previous</button>}
        { next ? <button type='button' className='btn btn-warning btn-lg justify-content-end' onClick={() => handleOnClick(next)}>Next</button> : <button className='btn btn-outline-warning btn-lg' disabled>Next</button> }
      </div>
    </div>
  )
}

export default Films
