import React, { useContext } from 'react'
import './css/Kategori.css'
import { KategoriContext } from '../Context/KategoriContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

export const Kategori = (props) => {
  const {all_product} = useContext(KategoriContext);
  return (
    <div className='kategori'>
      <img className='kategori-banner' src={props.banner} alt=''/>
      <div className="kategori-filter">
        <p>
          <span>Menampilkan 3</span> Product
        </p>
        <div className='kategori-icon'>
          sort by <img src={dropdown_icon}></img>
        </div>
      </div>
      <div className='kategori-product'>
        {all_product.map((item,i)=>{
          if (props, Kategori===item.kategori) {
            return 
            <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            harga_baru={item.harga_baru} 
            harga_lama={item.harga_lama} 
            />
          } else {
            return null;
          }
        })}
      </div>
      <div className="loadmore">
        Explore More
      </div>
    </div>
  )
}

export default Kategori