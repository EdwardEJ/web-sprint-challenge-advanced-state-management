import React from 'react'

const Smurf = ({ smurf }) => {
  return (
    <>
      <p>Smurf Name: {smurf.name}</p>
      <p>Smurf Age: {smurf.age}</p>
      <p>Smurf Height: {smurf.height}</p>
    </>
  )
}

export default Smurf