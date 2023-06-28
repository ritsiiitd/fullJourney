import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { Home,Generate } from './page';
import { aeroplane, aircraft } from './assets';
const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4'>
        <Link to="/">
            <img src={aircraft} alt="logo" className='w-10 mt-5 object-contain'/>
        </Link>

        <Link to="/generate" className="object-contain mt-5 font-inter font-medium font-semibold text-white bg-[#E90064] px-4 py-2 rounded-md">
          Generate Images
        </Link>

      </header>
      <main className='sm:p-8 p-4 py-8 w-full bg-[#E7E6E1] mt-5'>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/generate' element={<Generate/>}></Route>
        </Routes>

      </main>
    </BrowserRouter>
  )
}

export default App