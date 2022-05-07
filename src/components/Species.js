import React from 'react'

const Species = ({ data, next, previous, setData }) => {

  const handleOnClick = (url) => {
    window.location.href = url;
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
                <p>{entry.language}</p>
                <p>{entry.classification}</p>
                <p>{entry.average_lifespan}</p>
                <p>{entry.average_height}</p>
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

export default Species
