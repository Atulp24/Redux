import React from 'react'
import Box from './Box'

const Teacher = ({name}) => {
  if(name == "Atul") {
    return <div style={{border: "5px solid gold", margin: "5px"}}>
        <Box name={name} />
    </div>
  }
  else {
    return <div style={{border: "5px solid pink", margin: "5px"}}>
        <Box name={name} />
    </div>
  }
}

export default Teacher