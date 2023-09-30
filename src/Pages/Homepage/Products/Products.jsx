// Products.js
import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import style from '../../styles/style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct } from '../../../redux/actions';
import { useNavigate } from 'react-router-dom';
const Products = () => {
  const { data, filterKey, filteredData } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const ProductData = () => {
    if (filterKey === 'Men' || filterKey === 'Women' || filterKey === 'Kids') {
      return filteredData;
    } else {
      return data;
    }
  };

  const productdata = ProductData();

  const handleCardClick = (value) => {
    console.log(value);
    
    navigate('/productdetail');
    dispatch(selectProduct(value));
  };

  return (
    <div className={style.productsScroll}>
      {productdata.map((item, id) => (
        <div key={id} onClick={() => handleCardClick(item)} className={style.productcardDiv}>
          <Card
            hoverable
            cover={<img alt="example" src={item.img} />}
            className={style.productCard}
          >
            <Meta title={item.title} description={item.price} />
          </Card>
        </div>
      ))}
    </div>
  );
  
};

export default Products;
