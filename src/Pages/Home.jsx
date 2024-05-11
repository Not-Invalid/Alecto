import React from 'react'
import Promo from '../Components/Promo/Promo'
import Populer from '../Components/Populer/Populer'
import Offers from '../Components/Offers/Offers'
import Terbaru from '../Components/Terbaru/Terbaru'
import Subscribe from '../Components/Subscribe/Subscribe'

export const Home = () => {
  return (
    <div>
        <Promo/>
        <Populer/>
        <Offers/>
        <Terbaru/>
        <Subscribe/>
    </div>
  )
}

export default Home