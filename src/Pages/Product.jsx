import React, { useContext } from 'react'
import { KategoriContext } from '../Context/KategoriContext'
import { useParams } from 'react-router-dom';
import Navigate from '../Components/Navigate/Navigate';

export const Product = () => {
  const {all_product}= useContext(KategoriContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id ===Number(productId));
  return (
    <div className='product'>
      <Navigate product={product}/>
    </div>
  )
}

export default Product