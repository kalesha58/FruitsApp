import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {AnimatePresence} from "framer-motion"
import { CreateContainer, Header, MainContainer,Card,upi, Upi } from './components'
import { useStateValue } from './Context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunction'
import { actionType } from './Context/reducer'


const App = () => {
  const [{foodItems},dispatch]=useStateValue();
  const fetchData=async ()=>{
    await getAllFoodItems().then(data=>{
      // console.log(data);
      dispatch({
        type:actionType.SET_FOOD_ITEMS,
        foodItems:data
      })
    })
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <AnimatePresence exitBeforeEnter >

    <div  className='w-screen h-auto flex flex-col bg-primary' >

      <Header/>
      <main className='mt-14  md:mt-20 px-4  md:px-16 py-4 w-full'>
      <Routes>
        <Route path="/" element={<MainContainer/>} />
        <Route path="/createItem" element={<CreateContainer/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/Upi" element={<Upi/>} />
      </Routes>
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App
