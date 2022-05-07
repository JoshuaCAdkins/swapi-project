import React from 'react'

const Films = ({ data, next, previous, setData }) => {

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
                  {entry.title}
                </h1>
                <p>{entry.director}</p>
                <p>{entry.producer}</p>
                <p>{entry.release_date}</p>
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

export default Films
