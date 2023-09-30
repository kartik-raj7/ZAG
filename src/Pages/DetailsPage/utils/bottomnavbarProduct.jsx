import { Button, Col, Row, Typography } from 'antd'
import React from 'react'
import style from '../../styles/style.module.css'
import { useNavigate } from 'react-router-dom'
const BottomnavbarProduct = (props) => {
  const navigate = useNavigate();
  const addtobag = () =>{
    navigate('/mycart')
  }
  return (
    <Row className={style.bottomnavStyle}>
      {props?.price?(
        <>
      <Col span={10}><Typography>Price</Typography>
        <Typography>{props.price}</Typography></Col>
        <Col span={12} className={style.addtoCart}>
        <Button size='large' className={style.addtoCartbtn} onClick={addtobag}>Add to Bag</Button>
        </Col>
        </>
        ):(
          <Col span={23} size="large" className={style.checkoutDiv}><Button className={style.checkoutBtn}>Checkout</Button></Col>
        )}

    </Row>
  )
}

export default BottomnavbarProduct