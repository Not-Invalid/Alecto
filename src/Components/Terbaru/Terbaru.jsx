import React from 'react';
import './Terbaru.css';
import product_terbaru from '../Assets/Data/terbaru';
import Item from '../Item/Item';

const Terbaru = () => {
  return (
    <div className='terbaru'>
      <h1>Produk Terbaru</h1>
      <hr />
      <div className="item-terbaru">
        {product_terbaru.map((item, i) => (
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

export default Terbaru;
