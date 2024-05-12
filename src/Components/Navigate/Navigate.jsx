import React from 'react'
import './Navigate.css'
import arrow_icon from '../Assets/Navigate_icon.png'

const Navigate = (props) => {
  const {product} = props;
  return (
    <div className='navigate'>
      Home <img src={arrow_icon} alt=''/> Product <img src={arrow_icon} alt=''/> {product.kategori} <img src={arrow_icon} alt=''/>
    </div>
  )
}

export default Navigate