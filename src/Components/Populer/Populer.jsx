import React from 'react';
import './Populer.css';
import product_populer from '../Assets/Data/data';
import Item from '../Item/Item';

const Populer = () => {
  return (
    <div className='populer'>
      <h1>Produk Populer</h1>
      <hr />
      <div className="item-populer">
        {product_populer.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            harga_baru={item.harga_baru} 
            harga_lama={item.harga_lama} 
          />
        ))}
      </div>
    </div>
  );
}

export default Populer;
