import Axios from 'axios'

export const GET_DATA = 'GET_DATA'
export const GET_SUCCESS = 'GET_SUCCESS'
export const POST_DATA = 'POST_DATA'

export const getData = () => {
  return (dispatch) => {
    dispatch({ type: GET_DATA });

    Axios.get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({ type: GET_SUCCESS, payload: res.data })
      })
  }
}
