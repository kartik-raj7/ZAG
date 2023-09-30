import React from 'react';
import { Tabs } from 'antd';
import { HeartOutlined, HomeFilled, HomeOutlined, SettingFilled, ShoppingFilled } from '@ant-design/icons';
import style from '../../styles/style.module.css';

const { TabPane } = Tabs;

const CustomTab = ({ label, icon }) => (
  <span style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {label}
  </span>
);

const BottomNavbar = () => {
  const items = [
    {
      key: '1',
      label: 'Home',
      icon: HomeFilled,
    },
    {
      key: '2',
      label: 'Saved',
      icon:HeartOutlined
    },
    {
        key: '3',
        label: 'Cart',
        icon:ShoppingFilled
      },
      {
        key: '4',
        label: 'Settings',
        icon: SettingFilled
      },
  ];

  return (
    <Tabs defaultActiveKey="1" className={style.bottomNavbar}>
      {items.map((item) => (
        <TabPane
          tab={<CustomTab label={item.label} icon={item.icon || HomeOutlined} />}
          key={item.key}
        >
        </TabPane>
      ))}
    </Tabs>
  );
};

export default BottomNavbar;
