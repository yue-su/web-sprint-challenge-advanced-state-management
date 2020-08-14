//Action creator
import axios from 'axios'


export const fetchList = () => (dispatch) => {
  axios.get(`http://localhost:3333/smurfs`).then((res) => {
    dispatch({ type: 'FETCH_LIST', payload: res.data })
  })
}

export const postList = (item) => (dispatch) => {
    axios.post("http://localhost:3333/smurfs", item).then((res) => {
        dispatch({type: 'FETCH_LIST', payload: res.data})
    })
}

