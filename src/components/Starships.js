
const Starships = ({ setUrl, data, next, previous }) => {

  const handleOnClick = (url) => {
    setUrl(url);
  }

  return (
    <div className='container py-2'>
      <div className='row row-cols-auto gy-2 justify-content-center'>
        {data.map((entry, index) => {
          return (
            <div key={index} className='col p-2 bg-dark align-items-center mx-1'>
                <h2 className='text-warning'>
                  Starship: {entry.name}
                </h2>
                <p className='text-light'>Passengers: {entry.passengers}</p>
                <p className='text-light'>Crew: {entry.crew}</p>
                <p className='text-light'>Hyperdrive rating: {entry.hyperdrive_rating}</p>
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

export default Starships

