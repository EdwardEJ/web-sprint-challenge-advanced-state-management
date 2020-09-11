import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData } from '../store/actions'
import Smurf from './Smurf'

const Smurfs = (props) => {
  //props was being called as undefined without using it as argument
  //created variable get getData to solve
  const getData = props.getData
  useEffect(() => {
    getData();
  }, [getData])

  return (
    <>
      {props.smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </>
  )
}

const mapStateToProps = (props) => {
  return {
    smurfs: props.smurfs
  };
};

export default connect(mapStateToProps, { getData })(Smurfs)