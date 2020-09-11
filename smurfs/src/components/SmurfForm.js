import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postData } from '../store/actions'

const initialValues = {
  name: '',
  age: '',
  height: ''
}

const SmurfForm = ({ postData }) => {
  const [formValues, setFormValues] = useState(initialValues)

  const onInputChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    postData(formValues)
    setFormValues(initialValues)
  }


  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Enter Name'
          value={formValues.name}
          onChange={onInputChange}
        />
        <input
          type='text'
          name='age'
          placeholder='Enter Age'
          value={formValues.age}
          onChange={onInputChange}
        />
        <input
          type='text'
          name='height'
          placeholder='Enter Height'
          value={formValues.height}
          onChange={onInputChange}
        />

        <button>Add Smurf</button>
      </form>
    </>
  )
}

const mapStateToProps = (props) => {
  return {
    smurfs: props.smurfs
  }
}

export default connect(mapStateToProps, { postData })(SmurfForm)