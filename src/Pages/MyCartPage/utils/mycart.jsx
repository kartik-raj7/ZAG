import React, { useState } from 'react';
import { Card, Button, Col, Row, Image, Input, Divider } from 'antd';
import style from '../../styles/style.module.css'
import {DeleteOutlined,PlusSquareOutlined,MinusSquareOutlined} from '@ant-design/icons'
const Cart = ({ data }) => {
    const [cartItems, setCartItems] = useState(data);
  
    const handleDelete = (index) => {
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1);
      setCartItems(updatedCart);
    };
  
    const handleQtyChange = (index, newQty) => {
    console.log(newQty)
      const updatedCart = [...cartItems];
      updatedCart[index].qty = newQty;
      setCartItems(updatedCart);
    };
  
    const calculateSubtotal = () => {
      return cartItems.reduce((total, item) => total + item.qty * parseFloat(item.price.slice(1)), 0);
    };
    const calculateTotal =() =>{
        return (cartItems.reduce((total, item) => total + item.qty * parseFloat(item.price.slice(1)), 0)+80);
    }
  
    return (
      <div className={style.mycartDiv}>
        {cartItems.map((item, index) => (
          <Card key={index} className={style.productcheckoutDiv}>
            <Row>
              <Col span={10}>
                <Image src={item.img} alt={item.title} className={style.productcheckoutImage} />
              </Col>
              <Col span={14}>
                <Row className={style.productdetailsDiv}>
                  <h4 className={style.productTitle}>{item.title}</h4>
                  <Button type="danger" onClick={() => handleDelete(index)}>
                    <DeleteOutlined style={{ color: 'red' }} />
                  </Button>
                </Row>
                <Row>Sizes {item.sizes}</Row>
                <Row className={style.productdetailsDiv}>
                  <Col>
                    <p>INR {item.price}</p>
                  </Col>
                  <Col>
                    <Button
                      type="ghost"
                      className={style.productqtybtn}
                      onClick={() => handleQtyChange(index, Math.max(1, Number(item.qty) - 1))}
                    >
                      <MinusSquareOutlined />
                    </Button>
                    {item.qty}
                    <Button
                      type="ghost"
                      className={style.productqtybtn}
                      onClick={() => handleQtyChange(index, Number(item.qty) + 1)}
                    >
                      <PlusSquareOutlined />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        ))}
        <Input placeholder='add voucher' className={style.addVoucher}></Input>
        <div className={style.pricingSection}>
          <Row className={style.pricingrow}>
            <Col span={12} className={style.totalpricetextHeading}>
              Subtotal
            </Col>
            <Col span={12} className={style.totalpriceText}>
              INR {calculateSubtotal()}
            </Col>
          </Row>
          <Row className={style.pricingrow}>
      <Col span={12} className={style.totalpricetextHeading}>Vat</Col>
      <Col span={12} className={style.totalpriceText}>INR 0</Col>

      </Row>
      <Row className={style.pricingrow}>
      <Col span={12} className={style.totalpricetextHeading}>Shipping</Col>
      <Col span={12} className={style.totalpriceText}>INR 80</Col>
      </Row>
      <Divider className={style.divider} />
      <div className={style.divider}></div>
      <Row>
        <Col span={12} className={style.totalpricetextHeading}>
        Total</Col>
        <Col span={12} className={style.totalpriceText}>
            INR {calculateTotal()}
        </Col>
      </Row>
        </div>
      </div>
    );
  };
  
  export default Cart;
  

