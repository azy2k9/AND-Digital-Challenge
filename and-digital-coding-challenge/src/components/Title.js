import React, { memo } from 'react'
import { Typography } from '@material-ui/core'

const Title = memo(function Title(props) {
  return (
    <Typography variant="h3">Candidates Filter App</Typography>
  )
})

export default Title