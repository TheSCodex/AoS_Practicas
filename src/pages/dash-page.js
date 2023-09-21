import React from 'react'
import NavBar from '../components/nav-bar';

function DashPage() {
  return (
    <>
      <div className='flex'>
        <div>
          <NavBar />
        </div>
        <div>
          <h1>Hola Mundo!</h1>
        </div>
      </div>
    </>
  )
}

export default DashPage;