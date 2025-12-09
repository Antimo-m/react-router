import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 
  return (
    <>
     <BrowserRouter>
     <Route path='/'/>
     <Route path='/Chisiamo'/>
     <Route path='/Prodotti'/>
     </BrowserRouter>
    </>
  )
}

export default App
