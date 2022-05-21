import React, {FC} from 'react'
import './App.css'
import {Layout} from 'components/Layout'
import {Home} from 'pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const App: FC = () => (
  <BrowserRouter basename={'/blogs'}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
)

export default App
