import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import style from '../../styles/style.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { filterByCategory } from '../../../redux/actions'
import { filter } from '../../../utils/filterkeys';
const Filter = () => {
  const dispatch = useDispatch();
  const {filterKey } = useSelector(state => state);
  const handleFilter = (category) => {
    dispatch(filterByCategory(category));
  };
  useEffect(()=>{
    dispatch(filterByCategory('All'));
  },[]);
  return (
    <Row className={style.filter}> {filter.map((item, index) => (
        <Col span={4} key={index} className={filterKey==item.filterkey?style.selected:style.notSelected}>
          <div onClick={()=>handleFilter(item.filterkey)} className={style.filterKeys}>{item.filterkey}</div>
        </Col>
      ))}</Row>
  )
}

export default Filter