import React, {FC} from 'react'
import './App.css'
import {Layout} from 'components/Layout'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'


const App: FC = () => (
  <BrowserRouter basename={'/games'}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Navigate to="/snake"/>}/>
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
)

export default App
