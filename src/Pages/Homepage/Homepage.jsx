import Typography from 'antd/es/typography/Typography'
import React from 'react'
import BottomNavbar from './utils/BottomNavbar'
import { BellOutlined, FilterOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row } from 'antd'
import style from '../styles/style.module.css'
import Products from './Products/products'
import Filter from './utils/Filter'
const Homepage = () => {
  return (
    <div>
        <Row className={style.topNav}>
        <Row className={style.topsearchStyle}>
        <Col span={18}>
        <Typography.Title level={2}>Discover</Typography.Title>
        </Col>
        <Col span={4} className={style.filtericonDiv}>
        <BellOutlined />
        </Col>
        </Row>
         <Row className={style.topsearchStyle}>
        <Col span={18}>
        <Input size="large" placeholder="Search Anything" prefix={<SearchOutlined />} />
        </Col>
        <Col span={4} className={style.filtericonDiv}>
        <Button className={style.filterIcon}><FilterOutlined/></Button>
        </Col>
        </Row>
        
       <Filter/>
      
        <Products/>
        </Row>
        <BottomNavbar/>
    </div>
  )
}

export default Homepage