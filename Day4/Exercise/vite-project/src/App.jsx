import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData } from './Utils/dataSlice.js';

const App = () => {

  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const sliceData = useSelector((store) => store.data)

  return (
    <div>
      <input onChange={(e) => setData(e.target.value)} value={data} type="text" placeholder='Enter your data' />
      <button onClick={() => {
        if(!data) return;
        dispatch(addData(data))
        setData("")
      }} type='send'>Add data</button>

      <ul>
        {sliceData && sliceData.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default App