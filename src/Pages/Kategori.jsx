import React, { useContext } from 'react'
import './css/Kategori.css'
import { HomeContext } from '../Context/HomeContext'


export const Kategori = (props) => {
  const {all_product} = useContext(HomeContext);
  return (
    <div className='kategori'>
      <img src={props.banner} alt=''/>
    </div>
  )
}

export default Kategori