import React from 'react'
import './Promo.css'
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import mood_product from '../Assets/mood_product.png';

const Promo = () => {
  return (
    <div className='promo'>
        <div className="promo-left">
            <h2>NEW ARRIVAL ONLY</h2>
            <div>
                <div className="hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>Collections</p>
            </div>
            <div className="promo-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow} alt='' />
            </div>
        </div>
        <div className="promo-right">
            <img src={mood_product} alt='' />
        </div>
    </div>
  )
}

export default Promo