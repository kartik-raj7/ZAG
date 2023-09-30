import React, { useEffect } from 'react'
import TopbarProduct from './utils/topbarProduct'
import BottomnavbarProduct from './utils/bottomnavbarProduct'
import { useSelector } from 'react-redux'
import { Button, Image, Row, Space, Typography } from 'antd'
import style from '../styles/style.module.css'
import { DownloadOutlined, RotateLeftOutlined, RotateRightOutlined, SwapOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
const DetailsPage = () => {
  const {selectedProduct} = useSelector(state=>state);
  const navigate = useNavigate();
  useEffect(()=>{
    console.log('refreshed')
    console.log(selectedProduct)
    if(!selectedProduct){
       navigate('/');
    }
  },[])
  return (
    <div><TopbarProduct title={'Details'} url={'/home'}/>
    <div className={style.productPage}>
      <Image width={'100%'}src={selectedProduct.img}  preview={{
        toolbarRender: (
          _,
          {
            transform: { scale },
            actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
          },
        ) => (
          <Space size={12} className="toolbar-wrapper">
            <SwapOutlined rotate={90} onClick={onFlipY} />
            <SwapOutlined onClick={onFlipX} />
            <RotateLeftOutlined onClick={onRotateLeft} />
            <RotateRightOutlined onClick={onRotateRight} />
            <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
            <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
          </Space>
        ),
      }}/>
      <Row><Typography.Title level={4} className={style.productdetailsText}>{selectedProduct.title}</Typography.Title></Row>
      <Row><Typography.Title level={5} className={style.productdetailsText}>{selectedProduct.rating}/5(45 reviews)</Typography.Title></Row>
      <Row><Typography.Title level={5} className={style.productdetailsText}>{selectedProduct.description}</Typography.Title></Row>
      <Row><Typography.Title level={4} className={style.productdetailsText}>Choose Size</Typography.Title></Row>
      <Row>
  {selectedProduct?.sizes?.map((item, index) => (
    <Button key={index} className={style.sizebtn}>
      {item}
    </Button>
  ))}
</Row>
    </div>
    <BottomnavbarProduct price={selectedProduct.price}/>
    </div>
  )
}

export default DetailsPage