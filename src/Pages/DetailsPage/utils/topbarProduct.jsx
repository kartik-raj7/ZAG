import { ArrowLeftOutlined, BellOutlined } from '@ant-design/icons'
import { Col, Row, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import style from '../../styles/style.module.css'
const TopbarProduct = (props) => {
  const navigate = useNavigate();
  const handleArrowClick = () => {
    console.log(props)
    navigate(props.url);
  };
  return (
    <div>

<Row className={style.topheadingProduct}>
        <Col span={6}onClick={handleArrowClick}><ArrowLeftOutlined /></Col>
        <Col span={10}>
        <Typography.Title level={4} className={style.headingstyle}>{props.title}</Typography.Title>
        </Col>
        <Col span={6} className={style.filtericonDiv}>
        <BellOutlined />
        </Col>
        </Row>
    </div>
  )
}

export default TopbarProduct