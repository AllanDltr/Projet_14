import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CreateEmployees } from './pages/CreateEmployees/CreateEmployees'
import { CurrentEmployees } from './pages/CurrentEmployees/CurrentEmployees'

export const App = () => {
    return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CreateEmployees />} />
              {/* <Route path="/create" element={<CurrentEmployees />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
    )
}