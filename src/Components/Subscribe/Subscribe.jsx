import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <h1>Dapatkan Info Terbaru Dari Kami</h1>
        <p>Subscribe and Stay Update</p>
        <div>
            <input type='email' placeholder='Alamat Email Kamu'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe