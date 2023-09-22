import React from 'react'
import NavBar from '../components/nav-bar';

function DashPage() {
  return (
    <>
      <div className='flex'>
        <div>
          <NavBar />
        </div>
        <div className="bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-500 h-screen w-screen flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">Hola</h1>
          <h2 className="text-3xl font-semibold">Mundo!</h2>
        </div>
      </div>
    </>
  )
}

export default DashPage;