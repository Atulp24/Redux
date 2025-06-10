import React from 'react'
import Box from './Components/Box'
import Teacher from './Components/Teacher'
import { useMyHook } from './Utils/useMyHook'
import { useFetchData } from './Utils/useFetchData.js'
import Example from './Components/Example.jsx'
import render from './Components/render.jsx'


const App = () => {

  // const {value, setValue} = useMyHook([]);

  // useFetchData("https://hp-api.onrender.com/api/characters")
  // .then((data) => {
  //   setValue(data)
  // })
  
  return (
    <div>
      {/* <Box name={"Atul"} />
      <Box name={"Vivek"} />
      <Box name={"Aniket"} />
      <Box name={"Pratik"} /> */}

      {/* <Teacher name={"Aniket"} />
      <Teacher name={"Vivek"} />
      <Teacher name={"Pratik"} />
      <Teacher name={"Atul"} /> */}

      {/* <p>{value}</p>

      <button onClick={() => {
        setValue("Hello World!")
      }}>Click Me</button> */}

      {/* {value && value.map((item) => {
        return <p>{item.name}</p>
      })} */}

      <Example render={render} />

    </div>
  )
}

export default App