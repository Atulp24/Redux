import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addData, removeData } from './Utils/exampleSlice.js'



const App = () => {

  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const storeData = useSelector((store) => {
    return store.example;
  });

  return (
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
        <button onClick={() => {
          if(!text) return;
          dispatch(addData(text));
          setText("");
        }}>Click Me</button>

        <ul>
          {storeData.map((item) => {
            return <li onClick={() => {
              dispatch(removeData(item))
            }}>{item}</li>
          })}
        </ul>
      </div>
  )
}

export default App