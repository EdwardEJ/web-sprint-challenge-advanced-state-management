import {
  GET_DATA,
  GET_SUCCESS,
  POST_DATA,
  DELETE_DATA
} from '../actions'

const initialState = {
  smurfs: [{
    name: '',
    age: 0,
    height: '',
    id: new Date()
  }],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state
      }
    case GET_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }
    case POST_DATA:
      return {
        ...state,
        smurfs: action.payload
      }
    case DELETE_DATA:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload.id)
      }
    default:
      return state
  }
}