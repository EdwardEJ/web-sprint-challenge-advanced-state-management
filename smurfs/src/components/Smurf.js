import React from 'react'
import { connect } from 'react-redux'
import { deleteData } from '../store/actions'

const Smurf = ({ smurf, deleteData }) => {

  const onDeleteData = e => {
    e.preventDefault()
    deleteData(smurf)
  }

  return (
    <section>
      <h2>Smurf Name: {smurf.name}</h2>
      <p>Smurf Age: {smurf.age}</p>
      <p>Smurf Height: {smurf.height}</p>
      {<button onClick={onDeleteData}>Delete Smurf</button>}
    </section>
  )
}

export default connect(() => { return {} }, { deleteData })(Smurf)