import React from 'react'

const Example = ({render}) => {

    const data = ["Apple", "Ball"]

  return (
    render({text : data[1]})
  )
}

export default Example