import React from 'react'



const People = ({ data, next, previous, setData }) => {

  const handleOnClick = (url) => {
    if(previous) {

    } 
    if(next) {
      
    }
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
                <p>{entry.birth_year}</p>
                <p>{entry.gender}</p>
                <p>{entry.hair_color}</p>
                <p>{entry.eye_color}</p>
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

export default People
