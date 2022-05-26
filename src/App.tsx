import React, {FC} from 'react'
import './App.css'
import {Layout} from 'components/Layout'
import {Home} from 'pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Linux01 from 'pages/Linux/01/index.md'
import Linux02 from 'pages/Linux/02/index.md'
import {Markdown} from 'components/Markdown'


const App: FC = () => (
  <BrowserRouter basename={'/blogs'}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>

          <Route path="linux">
            <Route path="01" element={<Markdown md={Linux01}/>}/>
            <Route path="02" element={<Markdown md={Linux02}/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
)

export default App
