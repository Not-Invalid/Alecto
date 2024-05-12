import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt=''/></Link>
      <p>{props.name}</p>
      <div className='harga-item'>
        <div className='harga-diskon-item'>
          Rp.{props.harga_baru}
        </div>
        <div className='harga-lama-item'>
          Rp.{props.harga_lama}
        </div>
      </div>
    </div>
  );
}

export default Item;
