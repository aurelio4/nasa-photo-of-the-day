import React from 'react'

function Card({ data, loading }) {
  return loading ?
    <p>Loading..</p> : 
    (
      <div>
        <h1>{data.copyright}</h1>
      </div>
    )
}

export default Card