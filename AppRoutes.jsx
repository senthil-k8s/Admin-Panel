import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './src/views/app/Home/Home'
import login from './src/views/auth/login'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home}/>
        </Routes>
        <Routes>
            <Route path="/upload" Component={Home}/>
        </Routes>
        <Routes>
            <Route path="/login" Component={login}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes