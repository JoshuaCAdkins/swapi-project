
const Starships = ({ setUrl, data, next, previous }) => {

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
                  {entry.name}
                </h1>
                <p>{entry.passengers}</p>
                <p>{entry.crew}</p>
                <p>{entry.max_atmosphering_speed}</p>
                <p>{entry.hyperdrive_rating}</p>
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

export default Starships

