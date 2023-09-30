import React from 'react'
import TopbarProduct from '../DetailsPage/utils/topbarProduct'
import BottomnavbarProduct from '../DetailsPage/utils/bottomnavbarProduct'
import Cart from './utils/mycart'
import { cartdata } from '../../utils/cartdata'
const MyCartPage = () => {
  return (
    <>
    <div><TopbarProduct title={'My Cart'} url={'/productsdetail'}/></div>
    <div><Cart data={cartdata}/> </div>
    <div><BottomnavbarProduct/></div>
    </>
  )
}

export default MyCartPage