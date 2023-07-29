import { useState } from 'react'

import Navbar from './components/Navbar'
import About from './components/About'
import Problem from './components/Problem'
import Team from './components/Team'
import Client from './components/Client'
import Grow from './components/Grow'

function App() {  

  return (
    <div className='flex flex-col'>
      <Navbar />
      <About />
      <Problem />
      <Team />
      <Client />
      <Grow />
    </div>
  )
}

export default App
