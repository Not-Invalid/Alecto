import React from 'react'
import './Offers.css'
import mymh_product from '../Assets/mymh_product.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Penawaran Terbatas</h1>
            <h1>Hanya Untuk Kamu</h1>
            <p>Untuk Best Seller Product</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={mymh_product} alt=''/>
        </div>
    </div>
  )
}

export default Offers