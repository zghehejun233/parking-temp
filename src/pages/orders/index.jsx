import { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text } from '@tarojs/components';
import { Tabs, Tab, VirtualList, InfiniteScroll } from '@antmjs/vantui';
import { add, minus, asyncAdd } from '../../actions/counter';
import OrderList  from '../../components/order_list';
import './index.scss';

export default function Orders() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        name: `订单${i}`,
      });
    }
    setData(data);
  }, []);

  return (
    <View>
      <Tabs>
        <Tab title="使用中">
          <View>
            <OrderList />
          </View>
        </Tab>
        <Tab title="已预约" />
        <Tab title="已完成" />
      </Tabs>
    </View>
  );
}
