import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchList } from '../actions'
import { Typography, Box } from '@material-ui/core'

const CardList = () => {

    const dispatch = useDispatch()
    const smurfList = useSelector((state) => state)
    
    useEffect(() => {dispatch(fetchList())}, [])


    return (
        <div>
            {
                smurfList.map(smurf => {
                    return (
                      <Box
                        m={1}
                        display="flex"
                        justifyContent="space-around"
                            border={2}
                            borderRadius='10px'
                            borderColor='primary.main'
                      >
                        <Typography variant="h5">{smurf.name}</Typography>
                        <Typography variant="h6">{smurf.age}</Typography>
                        <Typography variant="h6">{smurf.height}</Typography>
                      </Box>
                    )
                })
            }
        </div>
    )
}

export default CardList
